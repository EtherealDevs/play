import ImageModel from "../models/ImageModel.js";
import fs from 'fs';
import { promisify } from "util";
const unlinkAsync = promisify(fs.unlink)

export const uploadImage = async (req, res) => {
  try {
    const image = req.file;
    await ImageModel.create(image)
    res.redirect('/images')
  } catch (error) {
    res.json({ error: error.message })
  }
}
export const getAllImages = async (req, res, next) =>{
  try {
      const images = await ImageModel.findAll();
      req.data = images
      if (req.get('origin')){
        if (req.get('origin') != `${process.env.APP_HOST}`){
            res.json(images)
            console.log(images)
            
        }
    }
    return next()
  } catch (error) {
      res.json({ error: error.message})
  }
}
// Mostrar un registro
export const getImage = async (req, res, next) =>{
  try {
      const image = await ImageModel.findAll({
          where: {
              id: req.params.id
          }
      });
      if (req.get('origin')){
        if (req.get('origin') != `${process.env.APP_HOST}`){
            res.json(image[0])
        }
    }
    return next()
  } catch (error) {
      res.json({ error: error.message})
  }
}
export const deleteImage = async (req,res) => {
  try {
    
      const image = await ImageModel.findOne({
          where :{ id : req.params.id}
      })
      if (image.id == 1) res.json({"message":"Unauthorized Action"})
      await unlinkAsync(image.path)
      await image.destroy()
      res.json({
          "message": "¡REGISTRO ELIMINADO!"
      })
  } catch (error) {
      res.json({ error: error.message})
  }
}

