import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { AuthManager } from "../manager/AuthManager.js";
import db from "../database/db.js";
import AdminModel from "../database/models/admin.js";
import { AdminManager } from "../manager/AdminManager.js";
import { promisify } from "util";

//Crear un registro
export const register = async (req, res) => {
  try {
    const manager = new AuthManager();
    manager.register(req.body);
  } catch (error) {
    res.send({
      error: error.message,
    });
  }
};
export const login = async (req, res, next) => {
  // NO se para que nos sirve esto. Tengo miedo de sacarlo
  if (req.cookies.jwt) {
    return res.redirect("/login");
  }
  // Al recibir la request. Intentar lo siguiente:
  try {
    // Guardar datos para operar con ellos:
    const username = req.body.username;
    const pass = req.body.pass;
    // Si cualquiera de los datos esta vacio.
    if (!username || !pass) {
      req.session.sessionFlash = "Proporcione un nombre de usuario y una contraseña";
      return next();
    } else {
      //GET User
      const user = await AdminModel.findOne({
        where: {
          username: username,
        },
      });
      // Guardar User en Results
      const results = user;
      //Si No existe User. No hay resultado.
      if (!results) {
        req.session.sessionFlash = "Usuario no encontrado!";
        return next();
      }
      // Comprobar contraseña.
      //Si la contraseña no es correcta. Bcryptjs.compare devuelve FALSE
      if (!(await bcryptjs.compare(pass, results.password))) {
        req.session.sessionFlash = "Contraseña incorrecta!";
        return next();
        //Si la contraseña es correcta. Bcryptjs.compare devuelve TRUE
      } else {
        console.log(results.id);
        // Generar una cookie JWT que comprobara la identidad del usuario durante la sesion. El valor de la misma es el ID del usuario codificado
        const token = jwt.sign(
          {
            id: results.id,
          },
          `${process.env.JWT_SECRET}`
        );

        console.log("login correcto");
        //Configurar httpOnly para la cookie generada, para que su valor no pueda ser accedido por client-side javascript
        const cookiesOptions = {
          httpOnly: true,
        };
        // Enviar la respuesta http
        res.cookie("jwt", token, cookiesOptions);
        res.cookie("auth", true);
        res.redirect("/");
      }
    }
    // Si algo falla, agarrar el error y mandarlo a la consola
  } catch (error) {
    console.log(error);
  }
};

export const isAuthenticated = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(
        req.cookies.jwt,
        `${process.env.JWT_SECRET}`
      );

      const user = await AdminModel.findOne({
        where: {
          id: decodificada.id,
        },
      });
      const results = user;
      if (!results) {
        return next();
      } else {
        req.user = results;
        return next();
      }
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    console.log("401 Error, unauthorized access");
    res.status(401);
    res.redirect("/login");
  }
};

export const checkUserToken = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      const decodificada = await promisify(jwt.verify)(
        req.cookies.jwt,
        `${process.env.JWT_SECRET}`
      );
      const user = await AdminModel.findOne({
        where: {
          id: decodificada.id,
        },
      });
      const results = user;
      if (!results) {
        return next();
      } else {
        req.user = results;

        return next();
      }
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    console.log("No user token");
    next();
  }
};

export const logout = (req, res) => {
  if (req.cookies.jwt) {
    res.clearCookie("jwt");
    res.clearCookie("auth");
    console.log("Logout function executed");
    res.status(200);
    return res.redirect("/login");
  } else {
    console.log(
      "Logout function cannot be executed, no available user records"
    );
    console.log("Redirecting...");
    res.status(100);
    return res.redirect("/login");
  }
};
