import express from 'express';
import { getAllCategories } from '../controller/categoriesController.js'
const router = express.Router();

router.get('/:all', getAllCategories)

export default router;
