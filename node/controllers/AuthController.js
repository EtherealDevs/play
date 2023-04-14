import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import db from '../database/db.js'
import UserModel from '../models/UserModel.js'
import { promisify } from 'util'

//Crear un registro 
export const register = async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        const passHash = await bcryptjs.hash(req.body.password, 8)
        user.password = passHash
        await user.save()
        console.debug(user)
        res.json({
            "message": "¡REGISTRO CREADO!"
        })
    } catch (error) {
        res.json({ error: error.message})
    }
}
export const login = async (req, res)=> {
    // try {
    //         const user = req.body.user
    //         const pass = req.body.pass
        
    //             if (!user || !pass) {
    //                 res.render('login', {
    //                     alert: true,
    //                     alertTitle: 'Advertencia',
    //                     alertMessage: 'Ingrese su usuario y su contraseña',
    //                     alertIcon: 'info',
    //                     showConfirmButton: true,
    //                     timer: false,
    //                     ruta: 'login'
    //                 })
    //             }else {
    //                 db.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=> {
    //                     if(results.length === 0 || !(await bcryptjs.compare(pass, results[0].pass))){
    //                         res.render('login', {
    //                             alert: true,
    //                             alertTitle: 'Advertencia',
    //                             alertMessage: 'Ingrese su usuario y su contraseña',
    //                             alertIcon: 'info',
    //                             showConfirmButton: true,
    //                             timer: false,
    //                             ruta: 'login'
    //                         })
    //                     }else{
    //                         const id = results[0].id
    //                         const token = jwt.sign({id:id}, process.env.JWT_SECRET)
        
    //                         const cookiesOptions = {
    //                             expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 1000),
    //                             httpOnly: true
    //                         }
    //                         res.cookie('jwt', token, cookiesOptions)
    //                         res.render('login', {
    //                             alert: true,
    //                             alertTitle: 'db Exitosa',
    //                             alertMessage: 'Login correcto',
    //                             alertIcon: 'succes',
    //                             showConfirmButton: false,
    //                             timer: 1000,
    //                             ruta: ''
    //                         })
    //                     }
    //                 })
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }

}

// exports.login = async (req, res)=> {
//     try {
//         const user = req.body.user
//         const pass = req.body.pass

//         if (!user || !pass) {
//             res.render('login', {
//                 alert: true,
//                 alertTitle: 'Advertencia',
//                 alertMessage: 'Ingrese su usuario y su contraseña',
//                 alertIcon: 'info',
//                 showConfirmButton: true,
//                 timer: false,
//                 ruta: 'login'
//             })
//         }else {
//             db.query('SELECT * FROM users WHERE user = ?', [user], async (error, results)=> {
//                 if(results.length === 0 || !(await bcryptjs.compare(pass, results[0].pass))){
//                     res.render('login', {
//                         alert: true,
//                         alertTitle: 'Advertencia',
//                         alertMessage: 'Ingrese su usuario y su contraseña',
//                         alertIcon: 'info',
//                         showConfirmButton: true,
//                         timer: false,
//                         ruta: 'login'
//                     })
//                 }else{
//                     const id = results[0].id
//                     const token = jwt.sign({id:id}, process.env.JWT_SECRET)

//                     const cookiesOptions = {
//                         expires: new Date(Date.now()+process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 1000),
//                         httpOnly: true
//                     }
//                     res.cookie('jwt', token, cookiesOptions)
//                     res.render('login', {
//                         alert: true,
//                         alertTitle: 'db Exitosa',
//                         alertMessage: 'Login correcto',
//                         alertIcon: 'succes',
//                         showConfirmButton: false,
//                         timer: 1000,
//                         ruta: ''
//                     })
//                 }
//             })
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }

// exports.isAuthenticated = async (req, res, next) => {
//     if (req.cookies.jwt) {
//         try {
//             const decodificada = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET)
//             db.query('SELECT * FROM users WHERE id = ?', [decodificada.id], (error, results)=> {
//                 if (!results) {
//                     return next()
//                 }
//                 req.user = results[0]
//                 return next()
//             })
//         } catch (error) {
//             console.log(error)
//             return next()
//         }
//     } else {
//         res.redirect('/login')
//     }
// }

// exports.logout = (req, res) => {
//     res.clearCookie('jwt')
//     return res.redirect('/')
// }