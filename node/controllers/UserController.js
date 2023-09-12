import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import db from "../database/db.js";
import UserModel from "../models/UserModel.js";
import { promisify } from "util";

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.json(users);
  } catch (error) {
    res.json({ error: error.message });
  }
};
// Mostrar un registro
export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(user[0]);
  } catch (error) {
    res.json({ error: error.message });
  }
};
//Crear un regostro
export const createUser = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    const passHash = await bcryptjs.hash(req.body.password, 8);
    user.password = passHash;
    await user.save();
    console.debug(user);
    res.json({
      message: "¡REGISTRO CREADO!",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};

// Actualizar un registro

export const updateUser = async (req, res) => {
  try {
    const passHash = await bcryptjs.hash(req.body.password, 8);
    await UserModel.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: passHash,
      },
      {
        where: { id: req.params.id },
      }
    );
    const user = await UserModel.findAll({
      where: {
        id: req.params.id,
      },
    });
    console.debug(user);
    res.json({
      message: "¡REGISTRO ACTUALIZADO!",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const deleteUser = async (req, res) => {
  try {
    await UserModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "¡REGISTRO ELIMINADO!",
    });
  } catch (error) {
    res.json({ error: error.message });
  }
};
