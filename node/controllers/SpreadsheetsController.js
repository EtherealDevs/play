import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import db from "../database/db.js";
import UserModel from "../models/UserModel.js";
import SpreadsheetModel from "../models/SpreadSheetModel.js";
import { promisify } from "util";

export const getAllSpreadsheets = async (req, res, next) => {
  try {
    const spreadsheets = await SpreadsheetModel.findAll();
    
    req.spreadsheets = spreadsheets

    next()
  } catch (error) {
    
    req.error = error
    next()

  }
};