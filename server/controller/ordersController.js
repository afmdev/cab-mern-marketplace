import ordersModel from '../models/ordersModel.js'
import usersModel from '../models/usersModel.js'
import itemsModel from '../models/itemsModel.js'


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
			.find({ user_id: req.params.user_id })
			.populate({ path: "items", select: ["itemName"] })
			.exec()

		if (requestedGenders.length === 0) {
			res.status(201)
				.json({ Message: "The request does not return any results. Try to enter another UserID'" })
		} else {
			res.status(200)
				.json({ requestedGenders, Number: requestedGenders.length })
		}
	} catch (error) {
		res
			.status(400)
			.json({ message: "SERVER: ordersController.js -  Something went wrong with the JSON.", error: error });
	}
}

const placeOrder = async (req, res) => {
	try {
		// const userID = await usersModel.findOneAndUpdate(req.body.id, {
		// 	user_id: req.body._id,
		// });
		const placeNewOrder = await ordersModel.create({
			user_id: req.body.user_id,
			items: req.body.items
			// items: request.body.items,
		})
		res.status(200).json({
			msg: "Great! order placed successfully",
			alertColor: "success",
			order: placeNewOrder,

		});
	} catch (error) {
		res.status(400).json({
			msg: "Ouch! Order not placed",
			alertColor: "warning",
			error: error,
		});
	}
};


export { getAllOrders, getOrdersByUser, placeOrder }