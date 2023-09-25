import AdminModel from "../database/models/admin.js";
import bcryptjs from "bcryptjs"

export class AdminManager {
  constructor(data) {
    this.currentAdminInSession = data;
  }
  async get(data) {}
  async updatePassword(data) {
    try {
        const passHash = await bcryptjs.hash(data, 8);
        await AdminModel.update(
          {
            password: passHash,
          },
          {
            where: { id: this.currentAdminInSession.id },
          }
        );
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  async updateUsername(data) {
    try {
      await AdminModel.update(
        {
          username: data,
        },
        {
          where: { id: this.currentAdminInSession.id },
        }
      );
  } catch (error) {
    res.json({ error: error.message });
  }
  }
  async updateEmail(data) {
    try {
      await AdminModel.update(
        {
          email: data,
        },
        {
          where: { id: this.currentAdminInSession.id },
        }
      );
  } catch (error) {
    res.json({ error: error.message });
  }
  }
}
