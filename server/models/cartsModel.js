import mongoose from 'mongoose'
const { Schema } = mongoose;

const cartsSchema = new mongoose.Schema({
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'user'
	}],
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'item'
	}]
});

const cartsModel = mongoose.model('cart', cartsSchema);

export default cartsModel