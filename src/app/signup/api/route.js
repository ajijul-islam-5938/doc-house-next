import { connectDB } from "@/connectDB"
import bcrypt from "bcrypt";

export const POST = async(request)=>{
    try {
        const db = await connectDB();
        const usersCollection = await db.collection("usersCollection");
        const userInfo = await request.json();

        const hashPassword = bcrypt.hashSync(userInfo.password, 14);

        const exist = await usersCollection.findOne({email : userInfo.email})
        if(exist){
            return Response.json({message : "already exist the user", status : 304 , exist})
        }
        const result = await usersCollection.insertOne({...userInfo,password : hashPassword})
        return Response.json({
            message : "user Created",
            status : 200,
            result
        })

    } catch (error) {
        return Response.json({
            message : "something went wrong",
            error
        })
    }
    
}