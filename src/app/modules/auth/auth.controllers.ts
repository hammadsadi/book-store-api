/**
 *@desc User Login
 *@Method POST
 */

import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthServices } from "./auth.services";


const authLogin = catchAsync(async (req, res) =>{
   const result = await AuthServices.authLogin(req.body)
   sendResponse(res, {
       success: true,
       message: 'User LoginSuccessful',
       data: result,
     });
})



 export const AuthControllers = {
    authLogin
 }