import express from 'express';
import { getAllCarts, getCartsByUser } from '../controller/cartsController.js'
const router = express.Router();

router.get('/all', getAllCarts)
router.get('/:user', getCartsByUser)

export default router;
