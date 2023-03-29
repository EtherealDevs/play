//importar la conexion BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const BlogModel = db.define('Blog',{
    title: { type: DataTypes.STRING},
    content: { type: DataTypes.STRING},
}, {
    tableName: 'blogs'
})
BlogModel.sync({ alter: true })
export default BlogModel