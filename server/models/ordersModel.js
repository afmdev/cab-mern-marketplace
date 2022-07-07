import mongoose from 'mongoose'
const { Schema } = mongoose;

const ordersSchema = new mongoose.Schema({
	user_id: {
		type: String,
		required: true,
	},
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'item'
	}],
	createdAt: {
		type: Date,
	},
});

const ordersModel = mongoose.model('order', ordersSchema);

export default ordersModel