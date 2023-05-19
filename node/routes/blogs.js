import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
import { isAuthenticated } from '../controllers/AuthController.js'
 
const blogs = express.Router()

blogs.get('/create', (req,res)=>{
    res.render('pages/blogs/create', {title:"Crear"})
})
blogs.get('/edit', (req,res)=>{
    res.render('pages/blogs/edit', {title:"Editar"})
})
blogs.get('/', getAllBlogs, (req,res)=>{
    res.render('pages/blogs/index', {title:"Blogs", data:req.data})
})
blogs.get('/:id', getBlog)
blogs.post('/',createBlog)
blogs.put('/:id', updateBlog)
blogs.delete('/:id', deleteBlog)

export default blogs