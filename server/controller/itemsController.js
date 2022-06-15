import itemsModel from '../models/itemsModel.js'

const getAllItems = async (req, res) => {

	console.log(req)
	try {
		const allItems = await itemsModel.find({});
		res
			.status(200)
			.json({ allItems, Number: allItems.length })
	}
	catch (error) {
		res
			.status(400)
			.json({ error: error, Message: "Something went wrong with the JSON." })
	}
}

export { getAllItems }