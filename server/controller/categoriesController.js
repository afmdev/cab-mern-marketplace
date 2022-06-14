import categoriesModel from '../models/categoriesModel.js'

const getAllCategories = async (req, res) => {
	try {
		const allCategories = await categoriesModel.find({});
		res
			.status(200)
			.json({ allCategories, Number: allCategories.length })
	}
	catch (error) {
		res
			.status(400)
			.json({ error: error, Message: "Something went wrong with the JSON." })
	}
}

export { getAllCategories }