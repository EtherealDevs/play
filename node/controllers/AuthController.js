import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import db from '../database/db.js'
import UserModel from '../models/UserModel.js'
import AdminModel from '../database/models/admin.js'
import { promisify } from 'util'

//Crear un registro 
export const register = async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        const passHash = await bcryptjs.hash(req.body.password, 8)
        user.password = passHash
        await user.save()
        console.debug(user)
    } catch (error) {
        res.status(500).send({ error: error.message})
    }
}
export const login = async (req, res)=> {
    if (req.cookies.jwt) {
        return res.redirect('/login')
    }
    try {
            const username = req.body.username
            const pass = req.body.pass
        
                if (!username || !pass) {
                    console.log('no username or password')
                }else {
            
                    const user = await AdminModel.findOne({
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
                                httpOnly: true
                            }
                         
                            res.cookie('jwt', token, cookiesOptions)
                            res.cookie('auth', true)
                            res.redirect('/')
                            
                            
                        }
                }
            } catch (error) {
                console.log(error)
            }

}

export const isAuthenticated = async (req, res, next) => {
    console.log(req.cookies)
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, `${process.env.JWT_SECRET}`)
            
            const user = await AdminModel.findOne({
                where: {
                    id : decodificada.id
                } 
            })
            const results = user
            
            
                if (!results) {
                    return next()
                } else{
                    req.user = results
                    
                    return next()
                }
        } catch (error) {
            console.log(error)
            return next()
        }
    } else {
        console.log('401 Error, unauthorized access')
        res.status(401)
        res.redirect('/login')
    }
}

export const checkUserToken = async (req, res, next)=>{
    console.log(req.cookies)
    if (req.cookies.jwt) {
        try {
            const decodificada = await promisify(jwt.verify)(req.cookies.jwt, `${process.env.JWT_SECRET}`)
            
            const user = await AdminModel.findOne({
                where: {
                    id : decodificada.id
                } 
            })
            const results = user
            
                if (!results) {
                    return next()
                } else{
                    req.user = results
                    
                    return next()
                }
        } catch (error) {
            console.log(error)
            return next()
        }
    } else {
        console.log('No user token')
        next()
    }
}

export const logout = (req, res) => {
    console.log(req.cookies)
    if (req.cookies.jwt) {
        res.clearCookie('jwt')
        res.clearCookie('auth')
        console.log('Logout function executed')
        res.status(200)
        return res.redirect('/login')
    } else {
        console.log('Logout function cannot be executed, no available user records')
        console.log('Redirecting...')
        res.status(100)
        return res.redirect('/login')
    }
    // res.header({Location: "http://localhost:3000/"})
}