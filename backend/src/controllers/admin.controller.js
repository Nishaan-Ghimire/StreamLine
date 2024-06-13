import User from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { CustomError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'


const increaseTotalUserCount = asyncHandler(async (req, res) => {
    try {

      const analyticsData = await Analytics.findOne();
  
      analyticsData.totalUserCount += 1;
  
      await analyticsData.save();
  
      res
      .status(200)
      .json(new ApiResponse(200,{
        totalUserCount: analyticsData.totalUserCount,
      },"Total user count increased successfully"))
      
    } catch (error) {
     throw new CustomError(500,"Internal Server Error")
    }
  });
  

const increaseTotalVerifiedUserCount = asyncHandler(async (req, res) => {
    try {

      const analyticsData = await Analytics.findOne();
  
      analyticsData.totalVerifiedUserCount += 1;
  
      await analyticsData.save();
  
      res
      .status(200)
      .json(new ApiResponse(200,{
        totalUserCount: analyticsData.totalVerifiedUserCount,
      },"Total verified user count increased successfully"))
      
    } catch (error) {
     throw new CustomError(500,"Internal Server Error")
    }
  });
  


  




  module.exports = increaseTotalUserCount;