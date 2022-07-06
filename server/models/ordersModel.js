import mongoose from 'mongoose'
const { Schema } = mongoose;

const ordersSchema = new mongoose.Schema({
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'user'
	}],
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'item'
	}]
});

const ordersModel = mongoose.model('order', ordersSchema);

export default ordersModel