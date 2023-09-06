import express from 'express'
import { getAdmin } from '../controllers/AdminController.js'
import { isAuthenticated } from '../controllers/AuthController.js'
 
const admin = express.Router()

admin.get('/config', isAuthenticated, getAdmin,(req,res)=>{
    // console.log(req);
    // res.render('pages/account')
})
// admin.put('/pass', updatePassword)
// admin.put('/username', updateUsername)
// admin.put('/email', updateEmail)

export default admin