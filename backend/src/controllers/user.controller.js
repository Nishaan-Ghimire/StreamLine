import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { CustomError } from '../utils/ApiError.js'
import { generateAccessAndRefreshToken,generateOTP,generateVerificationToken } from '../utils/MinorMethods.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'
import {sendEmail} from '../utils/mail.js'
import {generateEmailTemplate} from '../utils/mailTemplate.js'
import jwt from 'jsonwebtoken'



const registerController = asyncHandler(async (req, res) => {

        try {
                const { fullName, dob, username, email, phoneNo, password } = req.body;
                if (!fullName || !dob || !username || !email || !phoneNo || !password) {

                        throw new CustomError(409, "All fields are necessary");
                }

                const exisitingUser = await User.findOne({
                        $or: [{ username }, { email }, { phoneNo }]
                })
                console.log(exisitingUser);
                if (exisitingUser) {
                        res
                                .status(409)
                                .json({ message: "User already exist" })
                        // throw new CustomError(409, "This user already exist")
                } else {

                        const newUser = await User.create({
                                fullName,
                                dob,
                                username,
                                email,
                                phoneNo,
                                password
                        });

                        console.log(newUser._id);
                        // const newUserId = newUser._id;
                        const user = await User.findById(newUser._id).select("-password -refreshToken");

                        if (!user) {
                                throw new CustomError(500, "Something went wrong cannot create user")
                        }

                        return res
                                .status(201)
                                .json(new ApiResponse(201, user, "User registered successfully"))

                }


        } catch (error) {
                throw new CustomError(500, "Internal server error");
        }



})





const loginController = asyncHandler(async (req, res) => {

        try {

                const { email, password } = req.body;
                if (!email || !password) {

                        throw new CustomError(409, "All fields are necessary");
                }

                const loginUser = await User.findOne({ email });
                if (!loginUser) {
                        throw new CustomError("User doesn't exist")
                }
                const isPasswordValid = await loginUser.isPasswordCorrect(password);
                if (!isPasswordValid) {
                        throw new CustomError(401, "Incorrect Credentials")
                }


                const { accessToken, refreshToken } = await generateAccessAndRefreshToken(loginUser._id);

                const loggedInUser = await User.findById(loginUser._id).select("-password -refreshToken");

                const options = {
                        httpOnly: true,
                        secure: true
                }
                console.log(accessToken)

                return res
                        .status(200)
                        .cookie("accessToken", accessToken, options)
                        .cookie("refreshToken", refreshToken, options)
                        .json(
                                new ApiResponse(
                                        200,
                                        {
                                                user: loggedInUser, accessToken, refreshToken
                                        },
                                        "User logged in Successfully"
                                )
                        )


        } catch (error) {
                console.log({ error });
                res.json({ error })
        }
})


const logoutController = asyncHandler(async (req, res) => {

        await User.findByIdAndUpdate(req.user._id, {
                $set: {
                        refreshToken: 1,
                },
        }, {
                new: true,
        })

        const options = {
                httpOnly: true,
                secure: true,
        }


        return res
                .status(200)
                .clearCookie("accessToken", options)
                .clearCookie("refreshToken", options)
                .json(new ApiResponse(200, {}, "User logged Out"))


});




const changePasswordController = asyncHandler(async (req, res) => {
        const { oldPassword, newPassword } = req.body;
        // Verify Old password
        const user = req.user;
        const userDetail = await User.findById(user._id);
        const ispasswordVerified = await userDetail.isPasswordCorrect(oldPassword);
        if (!ispasswordVerified) {
                throw new CustomError(401, "Password is incorrect");
        }

        userDetail.password = newPassword;
        await userDetail.save({ validateBeforeSave: false });

        return res
                .status(200)
                .json(new ApiResponse(200, {}, "Password Changed successfully"));



})


const getUserDetail = asyncHandler(async (req, res) => {
        const user = req.user;
        return res
                .status(200)
                .json(new ApiResponse(200, user));
})



const updateAccountDetail = asyncHandler(async (req, res) => {
        const { email, phoneNo, fullName, dob } = req.body;

        const user = await User.findByIdAndUpdate(req.user?._id, {
                $set: {
                        email: email ? email : '',
                        phoneNo: phoneNo ? phoneNo : '',
                        fullName: fullName ? fullName : '',
                        dob: dob ? dob : '',
                },

        }, {
                new: true,
        }
        ).select("-password -refreshToken");


        return res
                .status(201)
                .json(new ApiResponse(200, user, "User details updated successfully"));

})



const uploadProfilePicture = asyncHandler(async (req, res) => {
        const profilePicPath = req?.file?.path;
        if (!profilePicPath) {
                throw new CustomError(400, "File not provided");
        }

        const profilePic = await uploadOnCloudinary(profilePicPath);

        const user = await User.findByIdAndUpdate(req.user?._id, {
                $set: {
                        profileImage: profilePic?.url
                }
        }, {
                new: true
        }).select("-password -refreshToken");

        if (!user) {
                throw new CustomError(500, "Internal Server Error");
        }

        res
                .status(200)
                .json(new ApiResponse(200, user, "Profile Picture Uploaded Successfully"))

})



const uploadCoverPicture = asyncHandler(async (req, res) => {
        const coverPicPath = req?.file?.path;
        if (!coverPicPath) {
                throw new CustomError(400, "File not provided");
        }

        const coverPic = await uploadOnCloudinary(coverPicPath);

        const user = await User.findByIdAndUpdate(req.user?._id, {
                $set: {
                        coverImage: coverPic?.url
                }
        }, {
                new: true
        }).select("-password -refreshToken");

        if (!user) {
                throw new CustomError(500, "Internal Server Error");
        }

        res
                .status(200)
                .json(new ApiResponse(200, user,"Cover Picture Uploaded Successfully"))

})



const refreshAccessToken = asyncHandler(async (req,res)=>{
        const oldrefreshToken = req.cookies.refreshToken || req.body.refreshToken;
       
        if(!oldrefreshToken){
                throw new CustomError(401,"Unauthorized token");
        }
        try {
        const decodedToken = jwt.verify(oldrefreshToken,process.env.REFRESH_TOKEN_SECRET);
        if(!decodedToken){
                throw new CustomError(401,"Invalid Access Token")
        }
        
        const user = await User.findById(decodedToken._id);
        if(oldrefreshToken !== user.refreshToken){
                console.log("Expired!!")
                throw new CustomError(401,"Refresh Token has expired");
        }

        const options ={
                httpOnly: true,
                secure: true
        }

        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

        return res
        .status(200)
        .cookie("accessToken",accessToken,options)
        .cookie("refreshToken",refreshToken,options)
        .json(new ApiResponse(200,
                {
                        accessToken,
                        refreshToken
                },
                "Access Token refreshed"
                
                ))


        } catch (error) {
                throw new CustomError(500,"Internal server error");
        }

        
})



const sendOtp = asyncHandler(async (req,res)=>{
        try {
                const {verificationToken,tokenTimestamp} = generateVerificationToken();
                const {otp,timestamp} = generateOTP(6);
                const user = await User.findByIdAndUpdate(req?.user?._id,{
                $set:{
                        otp,
                        otpTimestamp:timestamp,
                        token:verificationToken,
                        tokenTimestamp
                }
        },{
                new: true
        })
        
        if(!user){
                throw new CustomError(500,"Internal Server Error");
        }
        
        const template = generateEmailTemplate("Verify your account", "Please Enter the following OTP to verify your account. It expires in 5 minutes", user.username,verificationToken,otp);
        
        const mailOtp = await sendEmail(user.email,"Verify your account",template)
        
        console.log(mailOtp);
        if(!mailOtp){
          throw new CustomError(500,"Internal Server Error");
        }
        res
        .status(200)
        .json(new ApiResponse(200,{message:"OTP send successfully"}));
        
        } catch (error) {
              throw new CustomError(500,"Internal Server Error",error)  
        }
})






const verifyOTP = asyncHandler(async(req,res)=>{
        try{
                const {otp} = req.body;
                if(!otp){
                        throw new CustomError(409, "OTP field is necessary");;
                }
                const user = await User.findById(req?.user?._id);
                const OTPStatus = await user.isOTPValid(otp);
                if(!OTPStatus){
                        throw new CustomError(401,"OTP verification failed");
                }
                user.otp = 1;
                user.otpTimestamp = 1;
                user.token = 1;
                user.tokenTimestamp = 1;
                user.verified = true;
                await user.save();

                return res
                .status(200)
                .json(new ApiResponse(200,{message:"User verified Successfully"}));

        
        }catch(error){
                throw new CustomError(500,"Internal Server Error")
        }
})

const verifyToken = asyncHandler(async(req,res)=>{
        const token = req.params.token;
        if(!token){
                throw new CustomError(409, "Token is necessary");
        }
        // console.log("middleware",req.user)
        const user = await User.findById(req.user?._id);
     
        if(!user){
                throw new CustomError(409, "User not found");
        }
        const tokenStatus = await user.isValidToken(token);
        if(!tokenStatus)
        {
                throw new CustomError(401,"Invalid Token");
        }

        user.otp = 1;
        user.otpTimestamp = 1;
        user.token = 1;
        user.tokenTimestamp = 1;
        user.verified = true;
        await user.save();

        return res
        .status(200)
        .json(new ApiResponse(200,{message:"User verified Successfully"}));

})




export {
        registerController, 
        loginController, 
        logoutController, 
        changePasswordController, 
        getUserDetail,
        updateAccountDetail,
        uploadProfilePicture,
        uploadCoverPicture,
        refreshAccessToken,
        sendOtp,
        verifyOTP,
        verifyToken
}



