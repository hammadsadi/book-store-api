import { Router } from "express";
import { UserControllers } from "./user.controllers";

const userRouter = Router()

// Create User
userRouter.post('/register', UserControllers.userCreate)

// Get All User
userRouter.get('/', UserControllers.getAllUsers)
export const UserRoutes = userRouter