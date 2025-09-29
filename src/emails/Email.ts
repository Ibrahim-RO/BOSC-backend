import { transport } from "../config/nodemailer";

type UserType = {
    fullName: string,
    email: string,
    state: string,
    service: string,
    message: string
}

export class Email {

    static sendEmail = async (data: UserType) => {
        try {
            const email = transport.sendMail({
                from: 'rodriguez.o.ibra@gmail.com',
                to: 'rodriguez.o.ibra@gmail.com',
                subject: 'Nueva solicitud de contacto',
                html: `
                    <div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">
                        <h2 style="color:#0056b3;">Nueva solicitud de contacto</h2>
                        <p>Hola equipo de BOSC,</p>
                        <p>Se recibió una nueva solicitud de un cliente con la siguiente información:</p>
                        
                        <h3>👤 Datos del cliente</h3>
                        <ul>
                            <li><strong>Nombre:</strong> ${data.fullName}</li>
                            <li><strong>Correo:</strong> ${data.email}</li>
                            <li><strong>Estado:</strong> ${data.state}</li>
                            <li><strong>Servicio:</strong> ${data.service}</li>
                            <li><strong>Mensaje:</strong> ${data.message}</li>
                        </ul>

                        <p style="margin-top:20px;">Saludos,<br/>Sistema BOSC</p>
                    </div>
                `
            })

            console.log('Email enviado correctamente')
        } catch (error) {
            console.error('Error al enviar el correo:', error);
        }
    }

}