import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services";

/**
 * @Desc Create User
 * @Method POST
 */



const userCreate = catchAsync(async (req, res) =>{
    const result = await UserServices.createUser(req.body)
    sendResponse(res, {
        success: true,
        message: 'User Created Successful',
        data: result,
      });
 })

export const UserControllers = {
    userCreate
}



