//importar la conexion BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const UserModel = db.define(
  "User",
  {
    username: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    CREATED_AT: { type: DataTypes.DATEONLY },
    UPDATED_AT: { type: DataTypes.DATEONLY },
  },
  {
    tableName: "users",
    createdAt: "CREATED_AT",
    updatedAt: "UPDATED_AT",
  }
);
UserModel.sync({ alter: true });
export default UserModel;
