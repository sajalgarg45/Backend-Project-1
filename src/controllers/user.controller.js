import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import {uploadOnCloudinary} from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser = asyncHandler(async (req, res) => {

    // get user details from frontend
    const {fullName, email, username, password} = req.body
    console.log("email -> ", email);
    
    // validation -> not empty
    if(fullName === '' || email === '' || username === '' || password === ''){
        res.status(400);
        throw new ApiError(400, "All fields are required");
    }

    // check if user already exists -> email or username
    const existedUser = await User.findOne({
        $or: [{email}, {username}]
    })
    if(existedUser){
        res.status(400);
        throw new ApiError(409, "User already exists");
    }

    // check for images . check for avatar
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar is required");
    }

    // upload them to cloudinary , check the avatar
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if(!avatar){
        throw new ApiError(500, "Avatar upload failed");
    }

    // create user object -> create entry in DB
    const user = await User.create({
        fullName,
        email,
        username,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
    })

    // remove password and refresh token from response
    const createdUser = await user.finById(user._id).select("-password -refreshToken");
    // check for user creation
    if(!createdUser){
        throw new ApiError(500, "User creation failed");
    }

    // send response
    return res.status(201).json(
        new ApiResponse(201,createdUser, "User created successfully")
    );

});

export {registerUser};