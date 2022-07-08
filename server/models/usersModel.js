import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
	},
	birthday: {
		type: String,
	},
	password: {
		type: String,
	},
	avatarPicture: {
		type: String,
	},
	role: {
		type: String,
		default: 'USER',
	}
});

const usersModel = mongoose.model("user", usersSchema);
export default usersModel;
