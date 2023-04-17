import express from 'express'
import {login, register} from '../controllers/AuthController.js'

const auth = express.Router()

//router para los metodos del controlador
auth.post('/register', register);
auth.post('/login', login);

export default auth
