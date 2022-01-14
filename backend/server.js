import express from 'express'
//routes
import routes from './routes/routes.js'
import auth from './routes/auth.js'
import dotenv from 'dotenv'
import connectDB from './db.js'
import cors from "cors"
import errorHandler from './middleware/error.js'

dotenv.config({path: './config.env'})

const app = express()

app.use(cors())


const PORT = process.env.PORT  || 8000
connectDB()

app.use(express.json());

app.use('/api/v1', routes)
app.use('/api/v1', auth)

app.use(errorHandler)

const server = app.listen(
    PORT,
    console.log(`server is running on ${PORT}`)
);

process.on('unhandledRejection', (err, Promise)=>{
    console.log(`Error: ${err.message}`)
    server.close(()=>process.exit(1))
})