import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'
import { isAuthenticated } from '../controllers/AuthController.js'
 
const blogs = express.Router()

blogs.get('/', getAllBlogs)
blogs.get('/:id', getBlog)
blogs.post('/',createBlog)
blogs.put('/:id', updateBlog)
blogs.delete('/:id', deleteBlog)

export default blogs