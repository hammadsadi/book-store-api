import { TBook } from "./book.type";

// Save Book To DB
const bookSaveToDB = async(payload:TBook) =>{
    console.log(payload)
}


export const BookServices = {
    bookSaveToDB
}