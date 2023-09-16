import bcryptjs from "bcryptjs";
import db from "../database/db.js";
import AdminModel from "../database/models/admin.js";
import { AdminManager } from "../manager/AdminManager.js";
import { promisify } from "util";
import Validator from "../validators/AdminValidator.js";

export const getAdmin = async (req, res, next) => {
  try {
    req.adminData = req.user.dataValues;
    return next();
  }
   catch (error) {
    res.json({ error: error.message });
  }
};
export const updateAdmin = async (req, res, next) => {
  const validator = new Validator
  try {
    validator.validate(req.body)
    const admin = new AdminManager(req.user.dataValues);
    // admin.updateEmail(req.body.email)
    return next();
  }
   catch (error) {
    res.json({ error: error.message });
  }
};
