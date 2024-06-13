import {Router} from 'express'
import {upload} from '../middlewares/multer.middleware.js'
import {  registerController, 
    loginController, 
    logoutController, 
    changePasswordController, 
    getUserDetail,
    updateAccountDetail,
    uploadProfilePicture,
    refreshAccessToken,
    sendOtp,
    verifyOTP,
    verifyToken,
    uploadCoverPicture } from '../controllers/user.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js'
const router = Router();

router.route('/register').post(registerController);
router.route('/login').post(loginController);
router.route('/refreshToken').patch(refreshAccessToken);

// Secured Routed (permission level user)
router.route('/logout').post(authMiddleware,logoutController)
router.route('/sendOTP').post(authMiddleware,sendOtp);
router.route('/verifyOTP').post(authMiddleware,verifyOTP);


router.route('/verify/:token').get(authMiddleware,verifyToken);


router.route('/getUser').get(authMiddleware,getUserDetail);
router.route('/changePassword').patch(authMiddleware,changePasswordController);
router.route('/updateAccountDetail').patch(authMiddleware,updateAccountDetail);
router.route('/uploadProfileImage').patch(authMiddleware,upload.single('profilePic'),uploadProfilePicture);
router.route('/uploadCoverImage').patch(authMiddleware,upload.single('coverPic'),uploadCoverPicture);



export default router;