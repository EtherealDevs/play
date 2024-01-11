import express from "express";
import { isAuthenticated } from "../controllers/AuthController.js";
import { createSpreadsheet, getAllSpreadsheets, getSpreadsheet } from "../controllers/SpreadsheetsController.js";

const spreadsheets = express.Router();

spreadsheets.get("/", getAllSpreadsheets, (req, res) => {
  res.render("pages/spreadsheets/index.ejs", { spreadsheets : req.spreadsheets });
});
spreadsheets.get("/create", (req, res) => {
  res.render("pages/spreadsheets/create.ejs");
});
spreadsheets.post("/", createSpreadsheet, (req, res) => {
  res.redirect("/spreadsheets/");
});
spreadsheets.get("/:id", getSpreadsheet, (req, res) => {
  res.render("pages/spreadsheets/show.ejs", { spreadsheet : req.data });
});

export default spreadsheets;