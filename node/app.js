import express, { Router }  from "express";
import cors  from 'cors'
import db from "./database/db.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { promisify } from 'util'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import images from './routes/images.js'
import blogs from './routes/blogs.js'
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import { checkUserToken, isAuthenticated } from "./controllers/AuthController.js";
import UserModel from "./models/UserModel.js";

const app = express();

//para trabajar con las cookies
app.use(cookieParser())

// CORS. Cross Origin Resource Sharing. Un protocolo que permite compartir recursos entre dominios diferentes. Por ej. Localhost::3000 a localhost:8000
app.use( cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

// JSON parser desde express
app.use(express.json())

//seteo el motor de plantillas
app.set('view engine', 'ejs')

// 
app.use(express.static('public'))


//para procesar los datos enviados desde forms
app.use(express.urlencoded({extended:true}))


//seteamos las variables de entorno
dotenv.config()



//para eliminar la cache y que no se pueda volver con el boton back despues de desloguearse
app.use(checkUserToken, function(req, res, next){
    console.log(`Node server (app.js): checking user data from request...`)
    res.header('Access-Control-Allow-Credentials', true)
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
          )          
    if(!req.user){
        
        console.log(" No user token found, setting up headers to clear cache...")
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
        // res.header('Content-Type', 'text/html;application/json;charset=UTF-8')
        console.log("Headers Set.")
    }
    else {
        console.log("Success!")
        console.log(` User ID: ${req.user.id}\n Username: ${req.user.username}\n User Email: ${req.user.email}`)
    }
  
    next()
})

// Autentificar la conexion con la base de datos
try {
    await db.authenticate()
    console.log('Conexion Exitosa')
} catch (error) {
    console.log('Error: ${error}')
}

// Rutas
app.use('/blogs', isAuthenticated, blogs)
app.use('/image', isAuthenticated, images)
app.use('/', auth)
app.get('/', function (req, res) {
 
    // Rendering home.ejs page
    res.render('index');
})
app.use('/users', isAuthenticated, users)



app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
} )