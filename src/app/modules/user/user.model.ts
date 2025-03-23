import { model, Schema } from "mongoose";
import { TUser } from "./user.types";
import bcrypt from 'bcrypt'
import config from "../../config";
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
    role:{
        type:String,
        enum: ['Admin', 'User', 'SuperAdmin'],
        default:'User'
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


// User Password Has before Saving
userSchema.pre('save', async function (next) {
    const userInfo = this;
    userInfo.password = await bcrypt.hash(
      userInfo.password,
      Number(config.BCRYPT_SOLT_ROUND),
    );
    next();
  });


export const User = model<TUser>('User', userSchema)