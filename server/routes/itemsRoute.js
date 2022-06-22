import express from 'express';
import { getAllItems, getItemsBySlug } from '../controller/itemsController.js'
const router = express.Router();

router.get('/all', getAllItems)
router.get('/:slug', getItemsBySlug)

export default router;