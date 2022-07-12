import express from 'express';
import { getAllItems, getItemsBySlug, addProduct, uploadUserPicture } from '../controller/itemsController.js'
import { multerUploads } from "../middlewares/multer.js";


const router = express.Router();

router.post("/imageUpload", multerUploads.single("image"), uploadUserPicture);
router.get('/all', getAllItems)
router.post('/add-product', addProduct)
router.get('/:slug', getItemsBySlug)

export default router;