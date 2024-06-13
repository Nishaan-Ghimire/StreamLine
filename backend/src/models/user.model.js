import mongoose, { Schema } from "mongoose";
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
import {generateRefreshToken, generateAccessToken,isPasswordCorrect,preSaveMiddleware,isOTPValid,isValidToken} from '../utils/ModelMethods.js'

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        dob:{
            type: String,
            required: true,
        
        },
        phoneNo: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim:true,
            index: true,
        },
        profileImage:{
            type: String, //Cloudinary Url
            default: "profile"

        },
        coverImage:{
            type: String, //Cloudinary Url
            default: "Cover"
        },
        
        password:{
            type: String,
            required: [true,'Password is required'] 
        },
        refreshToken:{
            type: String,
        }
        ,
        role:{
            type:String,
            enum:["User","Admin"],
            default: "User"
        },
        verified:{
            type:Boolean,
            default: false
        },
        otp: {
            type: String,
        },
        otpTimestamp:{
            type: Date,
        },
        token:{
            type:String,
        },
        tokenTimestamp:{
            type: Date,
        },
        
    
    },
    {
        timeseries: true,
    }
)

userSchema.pre("save",preSaveMiddleware);
userSchema.methods.isPasswordCorrect = isPasswordCorrect;
userSchema.methods.generateAccessToken = generateAccessToken;
userSchema.methods.generateRefreshToken = generateRefreshToken;
userSchema.methods.isOTPValid = isOTPValid;
userSchema.methods.isValidToken = isValidToken;


const User = mongoose.model('User',userSchema);
export default User