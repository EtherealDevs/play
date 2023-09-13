import bcryptjs from "bcryptjs";
import db from "../database/db.js";
import AdminModel from "../database/models/admin.js";
import { AdminManager } from "../manager/AdminManager.js";
import { promisify } from "util";



export const getAdmin = async (req, res, next) => {
  try {
    const admin = new AdminManager(req.user.dataValues);
    req.adminData = admin.currentAdminInSession;
    return next();
  }
   catch (error) {
    res.json({ error: error.message });
  }
};
