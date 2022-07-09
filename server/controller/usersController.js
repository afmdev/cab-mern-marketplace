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
			msg: "Avatar image has been successfully uploaded.",
			alertColor: "success",
			imageUrL: uploadResult.url,
		});
	} catch (error) {
		res
			.status(409).json({
				msg: "Avatar image has not been uploaded successfully",
				alertColor: "error",
				error: error,
			});
	}
};


const updateProfile = async (req, res) => {
	// console.log('req.body >>>>>>>>>>>>>>>>>>>>>>', req.body)

	try {
		const updatedUser = await usersModel.findByIdAndUpdate(req.body.id, {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			// email: req.body.email,
			phone: req.body.phone,
			birthday: req.body.birthday,
			// password: hashedPassword,
			role: req.body.role,
			avatarPicture: req.body.avatarPicture,
		});
		console.log("updatedUser: ", updatedUser);
		res.status(200).json({
			msg: "Congratulations, your profile information has been successfully updated. ",
			alertColor: "success",
			firstName: updatedUser,
		});
	} catch (catchError) {
		res.status(409).json({
			msg: "This is embarrassing but the application has not been processed.",
			alertColor: "error",
			error: catchError
		});
	}
};



// try {
// 	const updateProfile = await usersModel.findByIdAndUpdate(req.body.id);
// 	console.log('req.body.id', req.body.id)
// 	console.log("updateProfile: ", updateProfile);
// 	res.status(200).json({
// 		msg: "SUCCESS: User info updated.",
// 		user: updateProfile,
// 	});
// } catch (error) {
// 	res.status(400).json({
// 		msg: "ERROR: Unable to update account information.",
// 	});
// }
// };

const signUp = async (req, res) => {
	try {
		console.log(req.body);
		const existingUser = await usersModel.findOne({ email: req.body.email });
		if (existingUser) {
			res.status(409).json({
				msg: "The chosen user already exists.",
				alertColor: "warning",
			});
		} else {

			const hashedPassword = await encryptPassword(req.body.password);
			console.log("hashedPassword", hashedPassword);


			const newUser = new usersModel({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
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
					msg: "Congratulations. User successfully registered.",
					alertColor: "success",
				});
			} catch (error) {
				res
					.status(409)
					.json({
						msg: "ERROR: Changes could not be saved.",
						alertColor: "error",
						error: error
					});
			}
		}
	} catch (error) {
		res
			.status(401).json({
				msg: "Registration was not possible at this time.",
				alertColor: "error",
				error: error
			});
	}
};


const logIn = async (req, res) => {

	const existingUser = await usersModel.findOne({ email: req.body.email });
	if (!existingUser) {
		res.status(401).json({
			msg: "The user doesn't exist, please register a new account.",
			alertColor: "warning",
		});
	} else {
		const verified = await verifyPassword(req.body.password, existingUser.password);
		console.log("exisiting user password", req.body.password);
		console.log("exisiting user password", existingUser.password);
		if (!verified) {
			res.status(401).json({
				msg: "The password is incorrect. Please try again.",
				alertColor: "error",
			});
		} else {
			console.log("verified", verified);
			console.log("logged in successful");
			const token = issueToken(existingUser.id);
			res.status(200).json({
				msg: "Login successful!",
				alertColor: "success",
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
		role: req.user.role,
		avatarPicture: req.user.avatarPicture,
	});
};


export { uploadUserPicture, signUp, logIn, updateProfile, getProfile };
