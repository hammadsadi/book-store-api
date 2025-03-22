import { ObjectId, Types } from "mongoose"

export type TBook={
    title:string,
    caption:string
    image:string
    rating:number,
    user:Types.ObjectId
}