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
    console.log('Error: ${error}')
}

// app.get('/', (req,res)=>{
//     res.send('HOLA MUNDO')
// })
app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
} )