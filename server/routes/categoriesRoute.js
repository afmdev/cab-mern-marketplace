import express from 'express';
const router = express.Router();
import categoriesModel from '../models/categoriesModel.js'


// router.get('/test', (req, res) => {
// 	res.send({ msg: 'Test route.' });
// });


router.get('/all', async (req, res) => {
	const allCategories = await categoriesModel.find({});
	res.json(allCategories)


});

export default router;
