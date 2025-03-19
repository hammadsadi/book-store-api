import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { UserRoutes } from "../modules/user/user.routes";

const router = Router()
const applicationRoutes =[
    {
        path:'/auth',
        route:AuthRoutes
    },
    {
        path:'/user',
        route:UserRoutes
    }
]

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router