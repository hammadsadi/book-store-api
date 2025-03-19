import { model, Schema } from "mongoose";
import { TUser } from "./user.types";

const userSchema = new Schema<TUser>({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    profileImage:{
        type:String,
        default:null
    }
}, {
    timestamps:true
})

export const User = model<TUser>('User', userSchema)