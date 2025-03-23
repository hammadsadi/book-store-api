import { Router } from "express";
import { BookControllers } from "./book.controllers";
import authChecker from "../../middlewares/authChecker";


const bookRouter = Router()

// Create Book
bookRouter.post('/create', authChecker, BookControllers.bookCreate)
bookRouter.get('/', BookControllers.getBooks)
bookRouter.delete('/:bookId', BookControllers.deleteBook)
bookRouter.get('/my-books', BookControllers.getMyBook)

export const BookRoutes = bookRouter