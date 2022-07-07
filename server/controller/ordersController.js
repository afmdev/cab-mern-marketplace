import ordersModel from '../models/ordersModel.js'


const getAllOrders = async (req, res) => {

	console.log(req)
	try {
		const data = await ordersModel
			.find({})
			.populate({ path: "items", select: ["itemName", "shortDesc"] })
			.exec()
		res
			.status(200)
			.json({ data, Number: data.length })
	}
	catch (error) {
		res
			.status(400)
			.json({ message: "SERVER: ordersController.js -  Something went wrong with the JSON.", error: error });
	}
}

const getOrdersByUser = async (req, res) => {
	console.log(req.params)
	try {
		const data = await ordersModel
			.find({ slug: req.params.email })
			.populate({ path: "items", select: ["user_id", "itemName"] })
			.exec()

		if (data.length === 0) {
			res.status(201)
				.json({ Message: "The request does not return any results. Try to enter another parameter" })
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

const placeOrder = async (request, response) => {
	try {
		const placeNewOrder = await ordersModel.create({
			user_id: request.body.user_id,
			items: request.body.items,
		});

		response.status(200).json({
			message: "OK: User info updated.",
			order: placeNewOrder,
		});
	} catch (error) {
		response.status(400).json({
			message: "ERROR: Unable to create new comment in comments collection.",
			error: error,
		});
	}
};


export { getAllOrders, getOrdersByUser, placeOrder }