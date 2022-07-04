import itemsModel from '../models/itemsModel.js'

const getAllItems = async (req, res) => {

	console.log(req)
	try {
		const data = await itemsModel.find({});
		res
			.status(200)
			.json({ data, Number: data.length })
	}
	catch (error) {
		res
			.status(400)
			.json({ message: "SERVER: itemsController.js -  Something went wrong with the JSON.", error: error });
	}
}

const getItemsBySlug = async (req, res) => {
	console.log(req.params)
	try {
		const data = await itemsModel
			.find({ slug: req.params.slug })

		if (data.length === 0) {
			res.status(201)
				.json({ Message: "The request does not return any results. Try to enter another parameter as 'Gender Code'" })
		} else {
			res.status(200)
				.json({ data, Number: data.length })
		}
	} catch (error) {
		res
			.status(400)
			.json({ message: "SERVER: itemsController.js -  Something went wrong with the JSON.", error: error });
	}
}

export { getAllItems, getItemsBySlug }