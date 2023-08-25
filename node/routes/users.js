import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/UserController.js'
import { isAuthenticated } from '../controllers/AuthController.js'
 
const users = express.Router()

users.get('/', getAllUsers,(req,res)=>{
    res.render('pages/account')
})
users.get('/:id', getUser)
users.post('/',createUser)
users.put('/:id', updateUser)
users.delete('/:id', deleteUser)

export default users