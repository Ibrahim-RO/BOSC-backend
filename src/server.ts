import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { connectDB } from './config/db'
import contactRouter from './routes/contactRouter'

dotenv.config()
connectDB()

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/contact', contactRouter)

export default app

