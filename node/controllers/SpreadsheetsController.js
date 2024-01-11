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
export const createSpreadsheet = async (req, res, next) => {
  try {
    const sheet = await SpreadsheetModel.create({
      title: req.body.title});
    next()
  } catch (error) {
    res.json({ error: error.message });
  }
}
export const getSpreadsheet = async (req, res, next) => {
  try {
    const spreadsheet = await SpreadsheetModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    req.data = spreadsheet
    next();
  } catch (error) {
    res.json({ error: error.message });
  }
};