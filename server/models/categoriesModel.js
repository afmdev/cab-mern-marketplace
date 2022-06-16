import mongoose from 'mongoose'
const { Schema } = mongoose;

const categoriesSchema = new mongoose.Schema({
	catName: {
		type: String,
		required: true,
		unique: true,
	},
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'item'
	}]
});

const categoriesModel = mongoose.model('category', categoriesSchema);

export default categoriesModel