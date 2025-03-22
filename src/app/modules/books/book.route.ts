import { Router } from "express";
import { BookControllers } from "./book.controllers";


const bookRouter = Router()

// Create Book
bookRouter.post('/create', BookControllers.bookCreate)

export const BookRoutes = bookRouter