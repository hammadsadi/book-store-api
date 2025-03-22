import AppError from "../../utils/AppError"
import { User } from "./user.model"
import { TUser } from "./user.types"

const createUser = async(payload:TUser)=>{
    if(!payload?.email || !payload?.password || !payload?.userName){
        throw new AppError(400, 'All Fields Are Required!')

    }

    // Check Password
    if(payload?.password.length < 6){
        throw new AppError(400, 'Password Should be at least 6 character long')
    }
     // Check User
     if(payload?.userName.length < 2){
        throw new AppError(400, 'Username Should be at least 3 character long')
    }

    // If user Exist
    const existUser = await User.findOne({
        $or:[
            {email:payload?.email},
            {userName:payload?.userName},
        ]
    })
    if(existUser){
        throw new AppError(400, 'User Already Exist!')
    }
    const imageUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${payload?.userName}`;

    const user = new User({
        email: payload?.email,
        userName:payload?.userName,
        password:payload?.password,
        profileImage:imageUrl
    })
    await user.save()
    return user
}

// Get All User From DB
const getAllUserFromDB = async() =>{
    const users = await User.find()
    return users
}


export const UserServices = {
    createUser,
    getAllUserFromDB
}