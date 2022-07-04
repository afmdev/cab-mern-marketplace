import { v2 as cloudinary } from "cloudinary";
import usersModel from "../models/usersModel.js";
import { verifyPassword, encryptPassword } from "../utils/bcrypt.js";
import { issueToken } from "../utils/jwt.js";


const uploadUserPicture = async (req, res) => {
	console.log("req.body", req.body);

	try {
		console.log("req.file", req.file);
		const uploadResult = await cloudinary.uploader.upload(req.file.path, {
			folder: "afm-mern-marketplace",
		});
		console.log("result", uploadResult);
		res.status(200).json({
			message: "OK: Avatar image has been successfully uploaded.",
			imageUrL: uploadResult.url,
		});
	} catch (error) {
		res
			.status(409)
			.json({ message: "SERVER: usersController.js -  Something went wrong with the JSON.", error: error });
	}
};


const updateProfile = async (req, res) => {
	// console.log('req.body >>>>>>>>>>>>>>>>>>>>>>', req.body)

	try {
		const hashedPassword = await encryptPassword(req.body.password);
		console.log("HOLA HASHED", hashedPassword)
		const updatedUser = await usersModel.findOneAndUpdate(req.body.id, {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			phone: req.body.phone,
			birthday: req.body.birthday,
			password: hashedPassword,
			avatarPicture: req.body.avatarPicture,
		});
		console.log("updatedUser: ", updatedUser);
		res.status(200).json({
			message: "OK: User info updated.",
			user: updatedUser,
		});
	} catch (error) {
		res.status(400)
			.json({ message: "SERVER: usersController.js -  Something went wrong with the JSON.", error: error });
	}
};



// try {
// 	const updateProfile = await usersModel.findByIdAndUpdate(req.body.id);
// 	console.log('req.body.id', req.body.id)
// 	console.log("updateProfile: ", updateProfile);
// 	res.status(200).json({
// 		message: "SUCCESS: User info updated.",
// 		user: updateProfile,
// 	});
// } catch (error) {
// 	res.status(400).json({
// 		message: "ERROR: Unable to update account information.",
// 	});
// }
// };

const signUp = async (req, res) => {
	try {
		console.log(req.body);
		const existingUser = await usersModel.findOne({ email: req.body.email });
		if (existingUser) {
			res.status(409).json({ message: "ERROR: The chosen user already exists." });
		} else {

			const hashedPassword = await encryptPassword(req.body.password);
			console.log("hashedPassword", hashedPassword);


			const newUser = new usersModel({
				firstName: req.body.firstName,
				email: req.body.email,
				password: hashedPassword,
				// avatarPicture: req.body.avatarPicture,

			});
			try {
				const savedUser = await newUser.save();
				res.status(201).json({
					user: {
						firstName: savedUser.firstName,
						email: savedUser.email,
						avatarPicture: savedUser.avatarPicture,
					},
					message: "OK: User successfully registered.",
				});
			} catch (error) {
				res
					.status(409)
					.json({ message: "ERROR: Changes could not be saved", error: error });
			}
		}
	} catch (error) {
		res
			.status(401)
			.json({ message: "ERROR: Registration was not possible at this time", error: error });
	}
};


const logIn = async (req, res) => {

	const existingUser = await usersModel.findOne({ email: req.body.email });
	if (!existingUser) {
		res.status(401).json({
			msg: "ERROR: You have to register first",
		});
	} else {
		const verified = await verifyPassword(req.body.password, existingUser.password);
		console.log("exisiting user password", req.body.password);
		console.log("exisiting user password", existingUser.password);
		if (!verified) {
			res.status(401).json({
				msg: "ERROR: Wrong password",
			});
		} else {
			console.log("verified", verified);
			console.log("logged in successful");
			const token = issueToken(existingUser.id);
			res.status(200).json({
				msg: "OK: Login successful",
				user: {
					firstName: existingUser.firstName,
					email: existingUser.email,
					id: existingUser._id,
					// avatarPicture: existingUser.avatarPicture,
				},
				token,
			});
		}
	}
};

const getProfile = (req, res) => {
	console.log("req.user", req.user);
	res.status(200).json({
		_id: req.user.id,
		firstName: req.user.firstName,
		lastName: req.user.lastName,
		email: req.user.email,
		phone: req.user.phone,
		birthday: req.user.birthday,
		password: req.user.password,
		avatarPicture: req.user.avatarPicture,
	});
};


export { uploadUserPicture, signUp, logIn, updateProfile, getProfile };
