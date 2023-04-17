import express, { Router }  from "express";
import cors  from 'cors'
import db from "./database/db.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";

import images from './routes/images.js'
import blogs from './routes/blogs.js'
import auth from "./routes/auth.js";
import users from "./routes/users.js";

const app = express();

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

//para trabajar con las cookies
app.use(cookieParser())

//para eliminar la cache y que no se pueda volver con el boton back despues de desloguearse
app.use(function(req, res, next){
    if(!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate')
        res.header('Content-Type', 'application/json;charset=UTF-8')
        res.header('Access-Control-Allow-Credentials', true)
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept'
          )
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
app.use('/blogs', blogs)
app.use('/image', images)
app.use('/', auth)
app.use('/users', users)



app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
} )