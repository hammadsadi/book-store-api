import { Router } from "express";
import { AuthControllers } from "./auth.controllers";

const authRoute = Router()

authRoute.post('/login', AuthControllers.authLogin)

export const AuthRoutes = authRoute