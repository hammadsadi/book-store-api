import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../config";
import { User } from "../modules/user/user.model";
const authChecker = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const token = req.header('Authorization')?.replace('Bearer', '');
        if(!token){
            throw new AppError(401, 'You are not Authorized, Access Denied!')
        }
        // Verify Token
        const decode = jwt.verify(token, config.JWT_ACCESS_TOKEN as string) as JwtPayload
        const user = await User.findById(decode?.userId as string).select('-password')
        if(!user){
            throw new AppError(401, 'Invalid User!')
        }
        // Set User Info
        req.user = user
        next()
    } catch (error) {
        throw new AppError(401, 'Invalid User!')
    }
}


export default authChecker