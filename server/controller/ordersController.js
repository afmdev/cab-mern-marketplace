import ordersModel from '../models/ordersModel.js'

const getAllOrders = async (req, res) => {

	try {
		const data = await ordersModel
			.find({})
			.populate({ path: "users", select: ["email"] })
			.populate({ path: "items", select: ["itemName"] })
			.exec()

		res
			.status(200)
			.json({ data, Number: data.length })
		console.log("All Carts", data)
	}
	catch (error) {
		res
			.status(400)
			.json({ message: "SERVER: cartsController.js -  Something went wrong with the JSON.", error: error });
	}
}

const getOrdersByUser = async (req, res) => {
	console.log(req.params)
	try {
		const data = await ordersModel
			.find({ email: req.params.email })
			.populate({ path: "users", select: ["email"] })
			.populate({ path: "items", select: ["itemName", "price"] })
			.exec()

		if (data.length === 0) {
			res.status(201)
				.json({ Message: "The request does not return any results. Try to enter another uniq parameter as 'E-Mail'" })
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

export { getAllOrders, getOrdersByUser }