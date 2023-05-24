//importar la conexion BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
import BlogModel from "./BlogModel.js";

const ImageModel = db.define('Image',{
    filename: { type: DataTypes.STRING},
    mimetype: { type: DataTypes.STRING},
    size: { type: DataTypes.INTEGER},
    path: { type: DataTypes.STRING},
    CREATED_AT: { type: DataTypes.DATEONLY},
    UPDATED_AT: { type: DataTypes.DATEONLY}
}, {
    tableName: 'images',
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
})
ImageModel.hasOne(BlogModel, {
    onDelete: 'SET NULL'
  });
  BlogModel.belongsTo(ImageModel)
  ImageModel.sync({alter:true})
  BlogModel.sync({alter:true})
export default ImageModel