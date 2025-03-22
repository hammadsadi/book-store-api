import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.routes";
import { UserRoutes } from "../modules/user/user.routes";
import { BookRoutes } from "../modules/books/book.route";

const router = Router()
const applicationRoutes =[
    {
        path:'/auth',
        route:AuthRoutes
    },
    {
        path:'/user',
        route:UserRoutes
    },
    {
        path:'/book',
        route:BookRoutes
    }
]

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router