import gendersModel from '../models/gendersModel.js'

const getAllGenders = async (req, res) => {
	try {
		const data = await gendersModel
			.find({})
			.populate({ path: "categories", select: ["catName"] })
			.exec()
		res
			.status(200)
			.json({ data, Number: data.length })
		console.log("all genders", data)
	}
	catch (error) {
		res
			.status(400)
			.json({ msg: "SERVER: gendersController.js -  Something went wrong with the JSON.", error: error });
	}
}

const getGendersByCode = async (req, res) => {
	console.log(req.params)
	try {
		const data = await gendersModel
			.find({ genderCode: req.params.genderCode })
			.populate({ path: "categories", select: ["catName"] })
			.exec()

		if (data.length === 0) {
			res.status(201)
				.json({ msg: "The request does not return any results. Try to enter another parameter as 'Gender Code'" })
		} else {
			res.status(200)
				.json({ data, Number: data.length })
		}
	} catch (error) {
		res
			.status(400)
			.json({ msg: "SERVER: gendersController.js -  Something went wrong with the JSON.", error: error });
	}
}

export { getAllGenders, getGendersByCode }