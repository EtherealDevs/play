import express from "express";
import multer from "multer";
import {
  deleteImage,
  getAllImages,
  getImage,
  uploadImage,
} from "../controllers/ImageController.js";
import ImageModel from "../models/ImageModel.js";

const images = express.Router();

// Donde guardar la imagen, destino y nombre. Se usa middleware Multer para que el servidor pueda trabajar con imagenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Aca se define la accion de Subir, Upload = Subir. Con la direccion (storage) especificada mas arriba. El comando completo es multer.Multer.upload. Esto se hace para reducir la verbosidad
const upload = multer({
  storage: storage,
  fileFilter: async (req, file, cb) => {
    console.log(req);
    console.log(file);
    var repeat = await ImageModel.findOne({
      where: {
        filename: file.originalname,
      },
    });
    console.log(repeat);
    if (repeat) {
      console.log(repeat);
      cb(null, false);
      req.body.repeatImage = true;
    } else {
      cb(null, true);
    }
  },
});

// Al ser Middleware, es necesario que se utilice el metodo de multer como handler en el images, y luego recien se pasa al controlador
images.get("/", getAllImages, (req, res) => {
  res.render("pages/images/index", { title: "Imagenes", data: req.data });
});
images.get("/upload", (req, res) => {
  res.render("pages/images/create", { title: "Crear" });
});
images.get("/:id", getImage, (req, res) => {
  res.render("pages/images/show", { title: "Imagen", image: req.data });
});
images.post("/upload", upload.single("file"), uploadImage);
images.delete("/:id", deleteImage);

export default images;
