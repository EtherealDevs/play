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
auth.get('/', isAuthenticated, (req,res)=>{
    res.render('pages/index', {title:"Inicio"})
})
auth.get('/config', isAuthenticated, (req,res)=>{
    res.render('pages/account', {title:"Configuracion de Usuario"})
})
auth.post('/register', register);
auth.get('/login', (req,res)=>{
    var error = null;
    if (req.body.error){
        error = req.body.error
        console.log("this works")
    }
    console.log("this does not work")
    res.render('pages/login', {error: error})
})
auth.post('/login', login, (req, res, next)=>{
    res.locals.sessionFlash = req.session.sessionFlash;
    delete req.session.sessionFlash;
    next();
}, (req, res)=>{
    res.render('pages/login', {error: res.locals.sessionFlash})
});
auth.post('/logout', logout);

auth.get('/logout', logout);
auth.get('/checkAuth' ,isAuthenticated, (req, res)=>{
    res.status(200).send({authStatus: "Success"})
   
})

export default auth
