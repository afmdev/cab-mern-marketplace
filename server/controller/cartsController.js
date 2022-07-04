import cartsModel from '../models/cartsModel.js'

const getAllUserCarts = async (req, res) => {

	try {
		const data = await cartsModel
			.find({})
			.populate({ path: "users", select: ["firstName"] })
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

export { getAllUserCarts }