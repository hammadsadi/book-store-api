import AppError from "../../utils/AppError";
import cloudinary from "../../utils/cloudinary";
import { Book } from "./book.model";
import { TBook } from "./book.type";

// Save Book To DB
const bookSaveToDB = async(payload:TBook, userId:string) =>{
   if(!payload?.caption || !payload?.image || !payload?.rating || !payload.title){
    throw new AppError(400, 'All Fields Are Required!')
   }
//    Upload Image
const imageResources = await cloudinary.uploader.upload(payload?.image)
const imageUrl = imageResources.secure_url

const newBook = new Book({
    title:payload?.title,
    caption:payload?.caption,
    rating:payload?.rating,
    image:imageUrl,
    user: userId
})
await newBook.save()
return newBook

}

// Get All Books
const getALlBooksFromDB = async (query: Record<string, unknown>) =>{
    const page = Number(query?.page) || 1
    const limit = Number(query?.limit) || 5
    const skip =(page - 1) * limit
    const books = await Book.find().sort({createdAt:-1}).skip(skip).limit(limit).populate('user', 'userName profileImage')
    const totalCounts = await Book.countDocuments()
    return {
        books,
        currentPage: page,
        totalBooks:totalCounts,
        totalPage: Math.ceil(totalCounts/limit)
    }
}

// Delete Books
const deleteBook = async(bookId:string, userId:string) =>{
    const book = await Book.findById(bookId)
    // Check Book 
    if(!book){
        throw new AppError(404, 'Book Not Found!')
    }
    // Check User
    if(book?.user.toString() !== userId.toString()){
        throw new AppError(401, 'You are Not Authorized!')
    }
    // Delete Book Image
    if(book?.image && book.image.includes('cloudinary')){
        try {
            const publicId = book?.image.split('/').pop()?.split('.')[0] as string
            await cloudinary.uploader.destroy(publicId)
        } catch (error) {
            throw new AppError(400, 'Image Is not Deleted!')
        }

    }
    await book.deleteOne()
    return book
}


// Get Loggedin User Books
const getLoggedinUserBooks = async(userId:string) =>{
    const books = await Book.find({user:userId}).sort({createdAt:-1})
    return books
}
export const BookServices = {
    bookSaveToDB,
    getALlBooksFromDB,
    deleteBook,
    getLoggedinUserBooks
}