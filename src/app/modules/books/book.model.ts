import { model, Schema } from "mongoose";
import { TBook } from "./book.type";

const bookSchema = new Schema<TBook>({
    title: { type: String, required: true },
    caption: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true }
  }, { timestamps: true });
  
  export const Book = model<TBook>("Book", bookSchema);