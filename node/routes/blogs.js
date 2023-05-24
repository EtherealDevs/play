import express, { response } from 'express'
import multer from 'multer'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
import { isAuthenticated } from '../controllers/AuthController.js'
import ImageModel from '../models/ImageModel.js'
import { Op, or } from 'sequelize'
 
const blogs = express.Router()

// Donde guardar la imagen, destino y nombre. Se usa middleware Multer para que el servidor pueda trabajar con imagenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/img')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    },
  })
var playLogoModel = await ImageModel.findOne({
    where :{ id : "1"}
})
const playLogoData = playLogoModel.dataValues

  
// Aca se define la accion de Subir, Upload = Subir. Con la direccion (storage) especificada mas arriba. El comando completo es multer.Multer.upload. Esto se hace para reducir la verbosidad
const upload = multer({ storage: storage, fileFilter: async (req, file, cb) => {
    console.log(file)
    var repeat = await ImageModel.findOne({
        where: {
            filename: file.originalname
            }
        })
    if (repeat){
        console.log(repeat)
        cb(null, false)
        req.body.repeatImage = true;
    } else {
        cb(null, true);
    }
  } })

blogs.get('/create', isAuthenticated, (req,res)=>{
    res.render('pages/blogs/create', {title:"Crear"})
})
blogs.get('/edit', isAuthenticated, (req,res)=>{
    res.render('pages/blogs/edit', {title:"Editar"})
})
blogs.get('/', getAllBlogs, (req,res)=>{
    res.render('pages/blogs/index', {title:"Blogs", data:req.data})
})
blogs.get('/:id', getBlog)
blogs.post('/', isAuthenticated, upload.single('image'), createBlog)
blogs.put('/:id', isAuthenticated, updateBlog)
blogs.delete('/:id', isAuthenticated, deleteBlog)

export default blogs