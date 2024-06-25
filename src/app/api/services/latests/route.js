import { connectDB } from "@/connectDB"

export const GET =async(req)=>{
    const db = await connectDB();
    const services = await db.collection("servicesCollection");
    const res = await services.find().limit(3).toArray();
    return Response.json({
        res
    })
}