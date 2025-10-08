import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const transport1 = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER1,        
        pass: process.env.GMAIL_APP_PASS1     
    }
})

export const transport2 = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER2,        
        pass: process.env.GMAIL_APP_PASS2
    }
})