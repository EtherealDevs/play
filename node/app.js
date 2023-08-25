import express, { Router }  from "express";
import cors  from 'cors'

import db from "./database/db.js";
import methodOverride from 'method-override'
import cookieParser from "cookie-parser";
import multer from "multer";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { promisify } from 'util'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import dotenv from "dotenv";

var sessionStore = new session.MemoryStore;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import images from './routes/images.js'
import blogs from './routes/blogs.js'
import auth from './routes/auth.js';
import users from './routes/users.js';
import { checkUserToken, isAuthenticated } from "./controllers/AuthController.js";
import UserModel from "./models/UserModel.js";
import session from "express-session";

const app = express();

global.appRoot = resolve(__dirname);

//seteamos las variables de entorno
dotenv.config({path: './.env'})

//para trabajar con las cookies
app.use(cookieParser())

// CORS. Cross Origin Resource Sharing. Un protocolo que permite compartir recursos entre dominios diferentes. Por ej. Localhost::3000 a localhost:8000
app.use( cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    cookie: { maxAge: 60000 },
    store: sessionStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'keyboard cat'
}));
// JSON parser desde express
app.use(express.json({ limit:'10mb' }))

//seteo el motor de plantillas
app.set('view engine', 'ejs')

// 
app.use(express.static('public'))

//para procesar los datos enviados desde forms
app.use(express.urlencoded({ limit:'100mb' ,extended:true}))

// para eliminar la cache y que no se pueda volver con el boton back despues de desloguearse
// app.use(checkUserToken, function(req, res, next){
//     // console.log(`Node server (app.js): checking user data from request...`)
//     // res.header('Access-Control-Allow-Credentials', true)
//     //     res.header(
//     //         'Access-Control-Allow-Headers',
//     //         'Origin, X-Requested-With, Content-Type, Accept'
//     //       )          
//     // if(!req.user){
        
//     //     console.log(" No user token found, setting up headers to clear cache...")
//     //     res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
//     //     res.header('Content-Type', 'text/html;application/json;charset=UTF-8')
//     //     console.log("Headers Set.")
//     // }
//     // else {
//     //     console.log("Success!")
//     //     console.log(` User ID: ${req.user.id}\n Username: ${req.user.username}\n User Email: ${req.user.email}`)
//     // }
//     // res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//     // res.header('Expires', '-1');
  
//     next()
// })

// MethodOverride para poder utilizar PUT, DELETE, y demas en formularios
app.use(methodOverride('_method'))

// Autentificar la conexion con la base de datos
try {
    await db.authenticate()
    console.log('Conexion Exitosa')
} catch (error) {
    console.log(`Error: ${error}`)
}
app.set('view engine', 'ejs')

app.use(function(req, res, next){
    // if there's a flash message in the session request, make it available in the response, then delete it
    res.locals.sessionFlash = req.session.sessionFlash;
    delete req.session.sessionFlash;
    next();
});

// Rutas
app.use('/blogs', blogs)
app.use('/images', isAuthenticated, images)
app.use('/', auth)
app.use('/users', isAuthenticated, users)

app.use((req,res,next)=>{
    res.status(404).render('pages/404',{
        title: "ERROR-404",
        message: "Página no encontrada",
        domain: `${process.env.APP_DOMAIN}`
    })
})


app.listen(`${process.env.APP_DOMAIN_PORT}`, ()=>{
    console.log(`Server UP running in ${process.env.APP_DOMAIN}`)
} )