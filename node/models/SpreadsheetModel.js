//importar la conexion BD
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const SpreadsheetModel = db.define(
  "Spreadsheet",
  {
    data: { type: DataTypes.TEXT },
  },
  {
    tableName: "spreadsheets",
  }
);
SpreadsheetModel.sync();
export default SpreadsheetModel;