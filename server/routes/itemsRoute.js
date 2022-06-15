import express from 'express';
import { getAllItems } from '../controller/itemsController.js'
const router = express.Router();

router.get('/:all', getAllItems)

export default router;