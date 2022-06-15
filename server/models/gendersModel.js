import mongoose from 'mongoose'
// const { Schema } = mongoose;

const gendersSchema = new mongoose.Schema({
	genderName: {
		type: String,
		required: true,
		unique: true,
	},
	genderCode: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	}
});

const gendersModel = mongoose.model('Gender', gendersSchema);

export default gendersModel