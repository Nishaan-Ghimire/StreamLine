import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async()=>{
    console.log(process.env.MONGODB_URI,DB_Name);
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
        console.log(`Connected to database : ${connectionInstance.connection.host}`);
    }catch(error){
        console.error('ERROR : ',error)
        process.exit(1);
    }
}

export default connectDB;