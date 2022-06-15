import express from 'express';
import { getAllGenders, getGendersByCode } from '../controller/gendersController.js'
const router = express.Router();

router.get('/all', getAllGenders)
router.get('/:genderCode', getGendersByCode)

export default router;
