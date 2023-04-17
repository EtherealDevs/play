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
        res.redirect('/users')
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
}
export const login = async (req, res)=> {
    try {
            const username = req.body.username
            const pass = req.body.pass
        
                if (!username || !pass) {
                    console.log('no username or password')
                }else {
            
                    const user = await UserModel.findOne({
                        where: {
                            username: username 
                        }
                    })
                    const results = user
                        if (!results){
                            return res.status(401).json({
                                error: "Usuario no encontrado!"
                              })
                        }
                        if (!(await bcryptjs.compare(pass, results.password))){
                            return res.status(401).json({
                                error: "Contraseña incorrecta!"
                              })
                        }
                        else{
                            console.log(results.id)

                            const token = jwt.sign({id:results.id}, `${process.env.JWT_SECRET}`)

                            console.log('login correcto')
                            console.log(token)
        
                            const cookiesOptions = {
                                maxAge: '900000',
                                httpOnly: true
                            }
                         
                            res.cookie('name', 'tobi', { path: '/', secure: true })
                            res.cookie('jwt', token, cookiesOptions)
                            res.send('test')
                            
                            
                        }
                }
            } catch (error) {
                console.log(error)
            }

}

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