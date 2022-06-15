import gendersModel from '../models/gendersModel.js'

const getAllGenders = async (req, res) => {
	try {
		const allGenders = await gendersModel.find({});
		res
			.status(200)
			.json({ allGenders, Number: allGenders.length })
		console.log(allGenders)
	}
	catch (error) {
		res
			.status(400)
			.json({ error: error, Message: "Something went wrong with the JSON." })
	}
}

const getGendersByCode = async (req, res) => {
	console.log(req.params)
	try {
		const requestedGenders = await gendersModel
			.find({ genderCode: req.params.genderCode })
			.exec()
		res.status(200).json({ requestedGenders, Number: requestedGenders.length })
	} catch (error) {
		res
			.status(400)
			.json({ error: error, Message: "Something went wrong with the Server." })
	}
}

export { getAllGenders, getGendersByCode }