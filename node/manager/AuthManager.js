import UserModel from "../models/UserModel.js";

export class AuthManager {
  async register(data) {
    const user = await UserModel.create(data);
    const passHash = await bcryptjs.hash(data.password, 8);
    user.password = passHash;
    await user.save();
  }
}
