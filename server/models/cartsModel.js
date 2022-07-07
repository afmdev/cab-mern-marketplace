import mongoose from 'mongoose'
const { Schema } = mongoose;

const cartsSchema = new mongoose.Schema({
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'item'
	}],
	createdAt: {
		type: Date,
	},
});

const cartsModel = mongoose.model('cart', cartsSchema);

export default cartsModel