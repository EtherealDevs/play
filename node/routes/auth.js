import express from 'express'
import {isAuthenticated, login, logout, register} from '../controllers/AuthController.js'

const auth = express.Router()

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-phone-token,Location');

    next();
}


//router para los metodos del controlador
auth.post('/register', register);
auth.post('/login', login);
auth.get('/logout', logout);
auth.get('/checkAuth' ,isAuthenticated, (req, res)=>{
    res.status(200).send({authStatus: "Success"})
   
})

export default auth
