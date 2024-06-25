import { connectDB } from "@/connectDB";

export const POST = async(req)=>{
    const data = await req.json();
    const db = await connectDB();
    const bookingCollection = await db.collection("bookingCollection");
    
    const res = await bookingCollection.insertOne(data);
    return Response.json({
        res
    })
}