//importamos el modelo
import BlogModel from "../models/BlogModel.js";
// **Metodos para el crud**/

//Mostrar todos los registros 

export const getAllBlogs = async (req, res) =>{
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs)
    } catch (error) {
        res.json({ error: error.message})
    }
}

// Mostrar un registro
export const getBlog = async (req, res) =>{
    try {
        const blog = await BlogModel.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(blog[0])
    } catch (error) {
        res.json({ error: error.message})
    }
}

//Crear un regostro 
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({
            "message": "¡REGISTRO CREADO!"
        })
    } catch (error) {
        res.json({ error: error.message})
    }
}

// Actualizar un registro

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
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