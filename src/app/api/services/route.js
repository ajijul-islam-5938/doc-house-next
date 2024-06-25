import { connectDB } from "@/connectDB";

export const GET = async req => {
  const db = await connectDB();
  const serviceCollection = await db.collection("servicesCollection");

  const res = await serviceCollection.find().toArray();

  return Response.json({
    res,
  });
};
