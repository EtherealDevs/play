import express from 'express'
import {register} from '../controllers/AuthController.js'

const auth = express.Router()

//router para los metodos del controlador
auth.post('/register', register);

export default auth
