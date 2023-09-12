import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import db from "../database/db.js";
import AdminModel from "../database/models/admin.js";
import { AdminManager } from "../manager/AdminManager.js";
import { promisify } from "util";

export const getAdmin = async (req, res, next) => {
  try {
    const manager = new AdminManager();
    console.log(req.user);
    return next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
