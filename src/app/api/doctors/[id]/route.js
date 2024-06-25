import { connectDB } from "@/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (req,{params}) => {
  const id = await params.id;
  const db = await connectDB();
  const doctorsCollection = await db.collection("doctorsCollection");
  const result = await doctorsCollection.findOne({ _id: new ObjectId(id) });
  return Response.json({
    result
  });
};
