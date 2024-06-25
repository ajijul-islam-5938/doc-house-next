import { connectDB } from "@/connectDB"

export const GET = async()=>{
    const db = await connectDB();
    const doctorsCollection = await db.collection("doctorsCollection");

    const res = await doctorsCollection.find().toArray();
    return Response.json({
        res
    })
}