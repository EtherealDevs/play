//importar la conexion BD
import db from "../db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const AdminModel = db.define('Admin',{
    username: { type: DataTypes.STRING},
    email: { type: DataTypes.STRING},
    password: { type: DataTypes.STRING},
    CREATED_AT: { type: DataTypes.DATEONLY},
    UPDATED_AT: { type: DataTypes.DATEONLY}
}, {
    tableName: 'admins',
    createdAt: 'CREATED_AT',
    updatedAt: 'UPDATED_AT'
})
AdminModel.sync({alter:true})
export default AdminModel