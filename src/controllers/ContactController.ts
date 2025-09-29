import { Request, Response } from "express";
import Contact from "../models/ContactModel";
import { Email } from "../emails/Email";

export class ContactController {

    static sendEmail = async (req: Request, res: Response) => {
        try {
            const newContact = new Contact(req.body)
            await newContact.save()

            const data = {
                fullName: newContact.fullName,
                email: newContact.email,
                state: newContact.state,
                service: newContact.service,
                message: newContact.message
            }

            await Email.sendEmail(data)
            res.status(201).json('Información enviada correctamente')
        } catch (error) {
            console.log(error)
            res.status(500).json({error: 'Hubo un error'})
        }
    }

}