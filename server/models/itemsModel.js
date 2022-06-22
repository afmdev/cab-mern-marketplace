import mongoose from 'mongoose'
// const { Schema } = mongoose;

const itemsSchema = new mongoose.Schema({
	itemName: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true,
		unique: true
	},
	shortDesc: {
		type: String,
		required: true
	},
	longDesc: {
		type: String,
		required: true
	},
	price: {
		type: String,
		required: true
	},
	sale: {
		type: String,
		required: true
	},
	rating: [{
		rate: {
			type: String
		},
		count: {
			type: String
		}
	}],
	editorChoice: {
		type: Boolean,
		required: true
	},
	picture: {
		type: String,
		required: true
	},
	gallery: [{
		type: Array
	}],
	author: {
		type: String,
		required: true
	},
	visibility: {
		type: Boolean,
		required: true
	},
	createdAt: {
		type: Date,
	},
	modifiedAt: {
		type: Date,
	},

});

const itemsModel = mongoose.model('item', itemsSchema);

export default itemsModel
