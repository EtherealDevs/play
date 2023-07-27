import BlogModel from "../models/BlogModel.js";
import dotenv from 'dotenv';
import os from 'os';
import ImageModel from "../models/ImageModel.js";


export const getAllBlogs = async (req, res, next) =>{
    try {
        const blogs = await BlogModel.findAll();
        const images = await ImageModel.findAll();
        req.data = [blogs, images]
        if (req.get('origin')){
            if (req.get('origin') != `${process.env.APP_HOST}`){
                return res.json(blogs)
            }
        }
        return next()
    } catch (error) {
        res.json({ error: error.message})
    }
}

// Mostrar un registro
export const getBlog = async (req, res, next) =>{
    try {
        const blog = await BlogModel.findOne({
            where: {
                id: req.params.id
            }
        });
        const image = await blog.getImage()
        req.data = [blog, image];
        if (req.get('origin')){
            if (req.get('origin') != `${process.env.APP_HOST}`){
                return res.json(blog)
            }
        }
        return next()
    } catch (error) {
        res.json({ error: error.message})
    }
}

//Crear un regostro
export const createBlog = async (req, res) => {
    try {
        const image = req.file;
        if (req.body.repeatImage){
            console.log("Repeated File!!!")
            await BlogModel.create({title: req.body.title, content: req.body.content, ImageId: image.id})
            res.redirect('/blogs/')
        }
        else{
            const img = await ImageModel.create(image)
            const test = await BlogModel.create({title: req.body.title, content: req.body.content, ImageId: img.id})
            res.redirect('/blogs/')
        }
    } catch (error) {
        res.json({ error: error.message})
    }
}

// Actualizar un registro

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update({title: req.body.title, content: req.body.content}, {
            where:{ id: req.params.id}
        })
        res.json({
            "message": "¡REGISTRO ACTUALIZADO!"
        })
    } catch (error) {
        res.json({ error: error.message})
    }
}

// Eliminar un registro

export const deleteBlog = async (req,res) => {
    try {
        await BlogModel.destroy({
            where :{ id : req.params.id}
        })
        res.json({
            "message": "¡REGISTRO ELIMINADO!"
        })
    } catch (error) {
        res.json({ error: error.message})
    }
}