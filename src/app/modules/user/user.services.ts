import AppError from "../../utils/AppError"
import { TUser } from "./user.types"

const createUser = async(payload:TUser)=>{
    if(!payload?.email || !payload?.password || !payload?.userName){
        throw new AppError(400, 'All Fields Are Required!')

    }
    return payload
}

export const UserServices = {
    createUser
}