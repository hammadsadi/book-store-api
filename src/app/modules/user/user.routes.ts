import { Router } from "express";
import { UserControllers } from "./user.controllers";

const userRouter = Router()

// Create User
userRouter.post('/register', UserControllers.userCreate)
export const UserRoutes = userRouter