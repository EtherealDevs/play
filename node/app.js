import express  from "express";
import cors  from 'cors'
import db from "./database/db.js";
import blogRoutes from './routes/routes.js'

const app = express();
app.use( cors())
app.use(express.json())
app.use('/blogs', blogRoutes)

try {
    await db.authenticate()
    console.log('Conexion Exitosa')
} catch (error) {
    console.log(`Error: ${error}`)
}
app.set('view engine', 'ejs')


// app.use((req,res,next)=>{
//     res.status(404).render('pages/404',{
//         title: "ERROR-404",
//         message: "Página no encontrada"
//     })
// })

app.get('/', (req,res)=>{
    res.render('pages/index', {title:"Inicio"})
})
app.get('/create', (req,res)=>{
    res.render('pages/create', {title:"Crear"})
})
app.get('/edit', (req,res)=>{
    res.render('pages/edit', {title:"Editar"})
})
app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
} )