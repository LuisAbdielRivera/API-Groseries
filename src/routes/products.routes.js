import { Router } from "express"
import { deleteProduct, getAll, getOne, insertProduct, updateProduct } from "../controllers/products.controller.js"
const router= Router()

router.get('/', getAll)
router.get('/:bc', getOne)
router.post('/', insertProduct)
router.post('/:bc', updateProduct)
router.get('/delete/:bc', deleteProduct)

export default router;