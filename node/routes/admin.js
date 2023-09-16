import express from "express";
import { updateAdmin } from "../controllers/AdminController.js";
import { isAuthenticated } from "../controllers/AuthController.js";

const admin = express.Router();

// admin.get("/config", isAuthenticated, getAdmin, (req, res) => {
//   console.log(req.admin);
//   res.render('pages/account')
// });
admin.put('/update', isAuthenticated, updateAdmin)

export default admin;
