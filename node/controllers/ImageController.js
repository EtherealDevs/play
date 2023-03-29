import ImageModel from "../models/ImageModel.js";

export const uploadImage = async (req, res) => {
  try {
    const image = req.file;
    await ImageModel.create(image)
    res.json({
      "message": "Imagen guardada correctamente"
    })
  } catch (error) {
    res.json({ error: error.message })
  }
}
export const getAllImages = async (req, res) =>{
  try {
      const images = await ImageModel.findAll();
      console.debug(images)
      res.json(images)
  } catch (error) {
      res.json({ error: error.message})
  }
}
// Mostrar un registro
export const getImage = async (req, res) =>{
  try {
      const image = await ImageModel.findAll({
          where: {
              id: req.params.id
          }
      });
      res.json(image[0])
  } catch (error) {
      res.json({ error: error.message})
  }
}
export const deleteImage = async (req,res) => {
  try {
    console.debug(ImageModel)
      await ImageModel.destroy({
          where :{ id : req.params.id}
      })
      res.json({
          "message": "¡REGISTRO ELIMINADO!"
      })
  } catch (error) {
      res.json({ error: error.message})
  }
}

