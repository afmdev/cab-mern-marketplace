import express from 'express';
import { getAllOrders, getOrdersByUser, placeOrder, } from '../controller/ordersController.js'
const router = express.Router();


router.get('/all', getAllOrders)
router.get('/:user_id', getOrdersByUser)
router.post('/placeOrder', placeOrder)


export default router;
