import express from "express";
import { isAuthenticated } from "../controllers/AuthController.js";
import { getAllSpreadsheets } from "../controllers/SpreadsheetsController.js";

const spreadsheets = express.Router();

spreadsheets.get("/", getAllSpreadsheets, (req, res) => {
  res.render("pages/spreadsheets/index.ejs", { spreadsheets : req.spreadsheets });
});

export default spreadsheets;