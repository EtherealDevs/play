import AdminModel from "../database/models/admin.js";
import bcryptjs from "bcryptjs"

export class AdminManager {
  constructor(data) {
    this.currentAdminInSession = data;
  }
  async get(data) {}
  async updatePassword(data) {
    try {
      if (data.verifyPassword === data.password) {
        const passHash = await bcryptjs.hash(data.password, 8);
        await AdminModel.update(
          {
            password: passHash,
          },
          {
            where: { id: this.currentAdminInSession.id },
          }
        );
        res.json({
          message: "¡REGISTRO ACTUALIZADO!",
        });
      }
    } catch (error) {
      res.json({ error: error.message });
    }
  }
  async updateUsername(data) {}
  async updateEmail(data) {}
}
