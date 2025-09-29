import { Router } from 'express'
import { body } from 'express-validator'
import { handleInputErrors } from '../middleware/validation'
import { ContactController } from '../controllers/ContactController'

const router = Router()

router.get('/requests', ContactController.getAllRequest)

router.post('/new-contact', 
    body('fullName')
        .notEmpty().withMessage('El nombre es obligatorio'),
    body('email')
        .notEmpty().withMessage('Email obligatorio')
        .isEmail().withMessage('Email no válido'),
    body('state')
        .notEmpty().withMessage('Estado obligatorio'),
    body('service')
        .notEmpty().withMessage('Estado obligatorio'),
    handleInputErrors,
    ContactController.sendEmail
)

export default router