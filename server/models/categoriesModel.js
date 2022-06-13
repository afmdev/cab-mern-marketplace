import mongoose from 'mongoose'
// const { Schema } = mongoose;

const categoriesSchema = new mongoose.Schema({
	catName: {
		type: String,
		required: true,
		unique: true,
	},
	gender: {
		type: String,
		required: true,
	},
});

const Category = mongoose.model('Category', categoriesSchema);

export default Category