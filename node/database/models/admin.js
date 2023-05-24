//importar la conexion BD
import db from "../db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const AdminModel = db.define('Admin',{
    username: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
    createdAt: { type: DataTypes.DATEONLY},
    updatedAt: { type: DataTypes.DATEONLY}
}, {
    tableName: 'admins'
})
AdminModel.sync({alter:true})
export default AdminModel