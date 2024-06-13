import User from '../models/user.model.js'
import {CustomError} from '../utils/ApiError.js'
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const accessControl = asyncHandler(async(req,res,next)=>{
 try {
       const accessToken = req.cookies.accessToken || req.header("Authorization")?.replace("Bearer ","");
       if(!accessToken){
           throw new CustomError(401,"Unauthorized request");
   
       }
   
       const decodedToken = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET);
       
       if(!decodedToken?.role)
       {
           throw new CustomError(401,"Invalid Access Token")
       }
   
       if(decodedToken?.role !== "Admin" && req.user.role !== "Admin"){
           throw new CustomError(401,"Not Permitted"); 
       }
       next()
 } catch (error) {
    throw new CustomError(401,"Internal server error");
 }
})