import express from "express";
import { updateAdmin, getAdmin } from "../controllers/AdminController.js";
import { isAuthenticated } from "../controllers/AuthController.js";

const admin = express.Router();

admin.get("/config", getAdmin, (req, res) => {
  console.log(req.adminData);
  res.render('pages/account')
});
admin.put('/update', updateAdmin)

export default admin;
