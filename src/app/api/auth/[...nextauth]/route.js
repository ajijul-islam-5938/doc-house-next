import { connectDB } from "@/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          type : "email",
          placeholder: "Enter your Email",
          name: "email",
          label: "Email",
        },
        password: {
          type : "password",
          placeholder: "Enter your Password",
          name: "password",
          label: "Password",
        },
      },
      async authorize(credentials) {
        const {email,password} = credentials;
    


        if(!email || !password){
          return null;
        }

        const db = await connectDB();
        const usersCollection = await db.collection("usersCollection");

        const currentUser = await usersCollection.findOne({email})


        if(!currentUser){
          return null
        }



        const matchedPassword = await bcrypt.compareSync(password, currentUser.password);

        if(matchedPassword){
          return true
        }
        
      }
    }),
  ],
  callbacks : {},
  pages : {
    signIn : "/signin"
  }

});

export { handler as GET, handler as POST };
