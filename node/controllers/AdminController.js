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
    const validationErrors = validator.validate(req.body)

    if (validationErrors.length === 0) {
      // Data is valid, proceed with signup
      // Redirect to the homepage or continue processing
      console.log("Data is valid.");

      const admin = new AdminManager(req.user.dataValues);

      const validatedFields = validator.validatedFields
      for (const [key, value] of Object.entries(validatedFields)) {
        switch (key) {
          case "username":
            admin.updateUsername(value)
            break;
          case "email":
            admin.updateEmail(value)
            break;
          case "newPassword":
            admin.updatePassword(value)
            break;
        }
      }

      return redirect('/');
    } else {
      // Data is invalid, handle errors
      // Redirect back to the signup form with error messages or indications
      console.error("Validation errors:", validationErrors);
      res.redirect("/admin/config")
    }
    
    
  }
   catch (error) {
    res.json({ error: error.message });
  }
};
