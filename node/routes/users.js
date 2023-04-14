import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from '../controllers/UserController.js'
 
const users = express.Router()

users.get('/', getAllUsers)
users.get('/:id', getUser)
users.post('/',createUser)
users.put('/:id', updateUser)
users.delete('/:id', deleteUser)

export default users