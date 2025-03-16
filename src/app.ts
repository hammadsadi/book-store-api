import express, { Application, Request, Response } from 'express'
import notFound from './app/middlewares/notFound'
const app:Application = express()

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({
        success:true,
        message: 'Book Store Api Running'
    })
})

// Global Middlewares
app.use(notFound)

export default app