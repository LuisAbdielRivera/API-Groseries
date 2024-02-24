import Router from "express";
import { getAll, getOne, insertUser, updateUser, deleteUser } from '../controllers/user.controller.js'
const router = Router()

router.get('/register/products', getAll)
router.get('/:identify', getOne)
router.post('/register', insertUser)
router.post('/:identify', updateUser)
router.get('/delete/:identify', deleteUser)


export default router