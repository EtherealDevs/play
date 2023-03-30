import express, { Router }  from "express";
import cors  from 'cors'
import db from "./database/db.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";

import images from './routes/images.js'
import blogs from './routes/blogs.js'


const app = express();
app.use( cors())
app.use(express.json())
//seteo el motor de plantillas
app.set('view engine', 'ejs')
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
    next()
})

try {
    await db.authenticate()
    console.log('Conexion Exitosa')
} catch (error) {
    console.log('Error: ${error}')
}

app.use('/blogs', blogs)
app.use('/image', images)



// app.get('/', (req,res)=>{
//     res.send('HOLA MUNDO')
// })
app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
} )