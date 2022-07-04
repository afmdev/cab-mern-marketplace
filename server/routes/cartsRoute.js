import express from 'express';
import { getAllUserCarts } from '../controller/cartsController.js'
const router = express.Router();

router.get('/:all', getAllUserCarts)

export default router;
