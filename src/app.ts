import express, { Application, Request, Response } from 'express'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
const app:Application = express()


// Routes
app.use('/api/v1', router)

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({
        success:true,
        message: 'Book Store Api Running'
    })
})


// Global Middlewares
app.use(notFound)

export default app