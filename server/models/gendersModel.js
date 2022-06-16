import mongoose from 'mongoose'
const { Schema } = mongoose;

const gendersSchema = new mongoose.Schema({
	genderName: {
		type: String,
		required: true,
		unique: true
	},
	genderCode: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: false
	},
	categories: [{
		type: Schema.Types.ObjectId,
		ref: 'category'
	}]
});

const gendersModel = mongoose.model('gender', gendersSchema);

export default gendersModel