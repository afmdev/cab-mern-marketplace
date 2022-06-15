import mongoose from 'mongoose'
// const { Schema } = mongoose;

const categoriesSchema = new mongoose.Schema({
	catName: {
		type: String,
		required: true,
		unique: true,
	},
});

const categoriesModel = mongoose.model('Category', categoriesSchema);

export default categoriesModel