import { connectDB } from "@/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        const db = await connectDB();
        const usersCollection = await db.collection("usersCollection");

        const currentUser = await usersCollection.findOne({ email });

        if (!currentUser) {
          return null;
        }

        const matchedPassword = bcrypt.compareSync(
          password,
          currentUser.password
        );

        if (!matchedPassword) {
          return null;
        }

        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "google") {
        const { email, name, image } = user;

        const db = await connectDB();
        const users = await db.collection("usersCollection");
        const exist = await users.findOne({ email });

        if (!exist) {
          const res = await users.insertOne(user);
          return user;
        }
        else{
          return user
        }
      } else {
        return false;
      }
    },
  },

  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
