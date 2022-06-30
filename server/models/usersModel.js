import mongoose from "mongoose";

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
		required: true,
	},
	avatarPicture: {
		type: String,
	},
});

const usersModel = mongoose.model("user", usersSchema);
export default usersModel;
