import express from 'express';
import { getAllOrders, getOrdersByUser, placeOrder, } from '../controller/ordersController.js'
import jwtAuth from "../middlewares/jwtAuth.js";


const router = express.Router();


router.get('/all', getAllOrders)
router.get('/:user_id', jwtAuth, getOrdersByUser)
router.post('/placeOrder', placeOrder)


export default router;
