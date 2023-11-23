import express from "express";
import { updateAdmin, getAdmin } from "../controllers/AdminController.js";
import { isAuthenticated } from "../controllers/AuthController.js";

const admin = express.Router();

admin.get("/config", getAdmin, (req, res) => {
  res.render("pages/account", { data: req.adminData });
});
admin.put("/update", updateAdmin);

export default admin;
