import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";

const router = Router()
const applicationRoutes =[
    {
        path:'/auth',
        route:AuthRoutes
    }
]

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router