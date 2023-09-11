import ImageModel from "../models/ImageModel.js";
import fs from "fs";
import { promisify } from "util";
const unlinkAsync = promisify(fs.unlink);

export const uploadImage = async (req, res) => {
  try {
    console.log(req);
    const image = req.file;
    if (req.body.repeatImage) {
      res.send("Repeat Image");
    } else {
      await ImageModel.create(image);
      if (req.body.noRedirect) {
        console.log("Image Created");
        res.send("File Created");
      } else {
        res.redirect("/images");
      }
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const getAllImages = async (req, res, next) => {
  try {
    const images = await ImageModel.findAll();
    req.data = images;
    if (req.get("origin") || req.query.jsonResponse) {
      if (
        req.get("origin") != `${process.env.APP_HOST}` ||
        req.query.jsonResponse
      ) {
        res.json(images);
        console.log(images);
      }
    } else return next();
  } catch (error) {
    res.json({ error: error.message });
  }
};
// Mostrar un registro
export const getImage = async (req, res, next) => {
  try {
    const image = await ImageModel.findOne({
      where: {
        id: req.params.id,
      },
    });
    req.data = image;
    if (req.get("origin")) {
      if (req.get("origin") != `${process.env.APP_HOST}`) {
        res.json(image);
      }
    } else {
      return next();
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
export const deleteImage = async (req, res) => {
  try {
    const image = await ImageModel.findOne({
      where: { id: req.params.id },
    });
    if (image.id == 1) {
      return res.status("403").send();
    }

    await unlinkAsync(image.path);
    await image.destroy();
    res.status("200").send();
  } catch (error) {
    res.json({ error: error.message });
  }
};
