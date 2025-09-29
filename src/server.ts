import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { connectDB } from './config/db'
import contactRouter from './routes/contactRouter'
import { corsConfig } from './config/cors'

dotenv.config()
connectDB()

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors(corsConfig))

app.use('/api/contact', contactRouter)

export default app
