import config from "../../config"
import AppError from "../../utils/AppError"
import { User } from "../user/user.model"
import { TUser } from "../user/user.types"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const authLogin = async(payload:Partial<TUser>) =>{
    // Check Email and Password
    if(!payload?.email || !payload?.password){
        throw new AppError(400, 'All Fields Are Required')
    }
    // Check User
    const user = await User.findOne({email:payload?.email})
    if(!user){
        throw new AppError(400, 'Invalid Credentials!')
    }
    const isMatchPassword =bcrypt.compare(payload?.password, user?.password)
    if(!isMatchPassword){
        throw new AppError(400, 'Invalid Credentials!')
    }
 const token = jwt.sign({userId:user?._id}, config.JWT_ACCESS_TOKEN as string, {expiresIn:'1d'})
     return {
         user,
         token
     }
}

export const AuthServices = {
    authLogin
}