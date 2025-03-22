import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.services";

/**
 * @Desc Create User
 * @Method POST
 */

const bookCreate = catchAsync(async (req, res) =>{
    const result = await BookServices.bookSaveToDB(req.body)
    sendResponse(res, {
        success: true,
        message: 'User Created Successful',
        data: result,
      });
 })



export const BookControllers = {
bookCreate
}



