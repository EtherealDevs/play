//importar la conexion BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";
import ImageModel from "./ImageModel.js";

const BlogModel = db.define('Blog',{
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.TEXT},
    ImageId: {type:DataTypes.INTEGER}
}, {
    tableName: 'blogs'
})
BlogModel.sync()
export default BlogModel