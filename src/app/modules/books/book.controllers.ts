import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookServices } from "./book.services";

/**
 * @Desc Create Book
 * @Method POST
 */

const bookCreate = catchAsync(async (req, res) =>{
    const result = await BookServices.bookSaveToDB(req.body, req.user._id)
    sendResponse(res, {
        success: true,
        message: 'Books Created Successful',
        data: result,
      });
 })

/**
 * @Desc Get All Books
 * @Method GET
 */

const getBooks = catchAsync(async (req, res) =>{
  const result = await BookServices.getALlBooksFromDB(req.query)
  sendResponse(res, {
      success: true,
      message: 'Book Retrieved Successful',
      data: result,
    });
})

/**
 * @Desc Delete Book
 * @Method Delete
 */

const deleteBook = catchAsync(async (req, res) =>{
  const result = await BookServices.deleteBook(req.params.bookId, req.user?._id)
  sendResponse(res, {
      success: true,
      message: 'Book Deleted Successful',
      data: result,
    });
})


/**
 * @Desc Get My Book
 * @Method GET
 */

const getMyBook = catchAsync(async (req, res) =>{
  const result = await BookServices.getLoggedinUserBooks( req.user?._id)
  sendResponse(res, {
      success: true,
      message: 'Book Retrieved Successful',
      data: result,
    });
})


export const BookControllers = {
bookCreate,
getBooks,
deleteBook,
getMyBook
}



