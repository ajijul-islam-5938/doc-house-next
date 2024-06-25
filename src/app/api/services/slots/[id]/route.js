import { connectDB } from "@/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {
  const id = await params.id;
  const db = await connectDB();
  const serviceCollection = await db.collection("servicesCollection");

  const res = await serviceCollection.findOne({ _id: new ObjectId(id) });

  return Response.json({
    res,
  });
};
