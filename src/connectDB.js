import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db) return db;

  try {
    const uri = process.env.NEXT_PUBLIC_MONGO_URI;
    const client = await new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = await client.db("docHouse");
    return db;
  } catch (error) {
    console.log("something went worng ",error);
  }
};
