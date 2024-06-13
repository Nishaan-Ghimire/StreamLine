import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { CustomError } from './ApiError.js'

async function preSaveMiddleware(next) {
    if (!this.isModified("password")) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
}


async function isPasswordCorrect(password) {
    console.log(password);
    try{
        const status = await bcrypt.compare(password, this.password);
        return status; 

    }catch(error)
    {
        console.log(error);
        return false;
    }
}

async function isOTPValid(otp){
    try{
        if(otp !== this.otp){
            throw new CustomError(401,"Invalid OTP");
        } 
        const currentTimeStamp = new Date();
        const validityDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

        if((currentTimeStamp - this.otpTimestamp) > validityDuration)
        {
            throw new CustomError(401,"OTP has been Expired");
        }
        return true;
        

    }catch(error){
        return false
    }
}



async function isValidToken(token){
    try {
        if(token !== this.token)
        {
            throw new CustomError(401,"Invalid Token");
        }
        const currentTimeStamp = new Date();
        const validityDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

        if((currentTimeStamp - this.tokenTimestamp) > validityDuration)
        {
            throw new CustomError(401,"Token has been Expired");
        }
        return true;
      

    } catch (error) {
        throw new CustomError(500,"Internal Server Error")
    }
}






async function generateAccessToken() {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullName: this.fullName,
        role: this.role,
    },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

async function generateRefreshToken(){
    return jwt.sign({
        _id: this._id,
        role: this.role,
        
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}

export {generateAccessToken, generateRefreshToken,isPasswordCorrect,preSaveMiddleware,isOTPValid,isValidToken}