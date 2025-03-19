import express, { Application, Request, Response } from 'express'
import notFound from './app/middlewares/notFound'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
const app:Application = express()

app.use(express.json())
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
app.use(globalErrorHandler)


export default app