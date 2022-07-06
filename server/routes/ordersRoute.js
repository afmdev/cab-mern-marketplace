import express from 'express';
import { getAllOrders, getOrdersByUser } from '../controller/ordersController.js'
const router = express.Router();

router.get('/all', getAllOrders)
router.get('/:user', getOrdersByUser)

export default router;
