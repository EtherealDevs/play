import express, { response } from "express";
import sanitizeHtml from 'sanitize-html';
import multer from "multer";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../controllers/BlogController.js";
import { isAuthenticated } from "../controllers/AuthController.js";
import ImageModel from "../models/ImageModel.js";
import { Op, or } from "sequelize";
import { getAllImages } from "../controllers/ImageController.js";

const blogs = express.Router();

// Donde guardar la imagen, destino y nombre. Se usa middleware Multer para que el servidor pueda trabajar con imagenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var playLogoModel = await ImageModel.findOne({
  where: { id: "1" },
});
const playLogoData = playLogoModel.dataValues;

// Aca se define la accion de Subir, Upload = Subir. Con la direccion (storage) especificada mas arriba. El comando completo es multer.Multer.upload. Esto se hace para reducir la verbosidad
const upload = multer({
  storage: storage,
  fileFilter: async (req, file, cb) => {
    console.log(file);
    var repeat = await ImageModel.findOne({
      where: {
        filename: file.originalname,
      },
    });
    if (repeat) {
      console.log(repeat);
      cb(null, false);
      req.body.repeatImage = true;
      req.file = repeat;
    } else {
      cb(null, true);
    }
  },
});

blogs.get("/create", isAuthenticated, (req, res) => {
  res.render("pages/blogs/create", { title: "Crear", route: req.url });
});
blogs.get("/:id/edit", isAuthenticated, getBlog, (req, res) => {
  res.render("pages/blogs/edit", {
    title: "Editar",
    route: req.params.id,
    data: req.data,
  });
});
blogs.get("/", getAllBlogs, (req, res) => {
  res.render("pages/blogs/index", { title: "Blogs", data: req.data });
});
blogs.get("/:id", getBlog, (req, res) => {
  res.render("pages/blogs/show", { title: req.data.title, data: req.data });
});
blogs.post("/", isAuthenticated, upload.single("image"), (req, res, next) =>{
  console.log(req.body);
  req.body.title = sanitizeHtml(req.body.title)
  req.body.content = sanitizeHtml(req.body.content)
  console.log(req.body.title);
  console.log(req.body.content);
  next();
}, createBlog);
blogs.put("/:id", isAuthenticated, upload.single("image"), updateBlog);
blogs.delete("/:id", isAuthenticated, deleteBlog);

export default blogs;
