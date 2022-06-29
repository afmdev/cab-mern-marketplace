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
			.status(500)
			.json({ message: "ERROR: The avatar image has not been successfully uploaded.", error: error });
	}
};

const updateUser = async (req, res) => {
	try {

	} catch (error) {
		res
			.status(409)
			.json({ message: "ERROR: Changes could not be saved", error: error });
	}
}


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
				userName: req.body.userName,
				email: req.body.email,
				password: hashedPassword,
				avatarPicture: req.body.avatarPicture,

			});
			try {
				const savedUser = await newUser.save();
				res.status(201).json({
					user: {
						userName: savedUser.userName,
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
					userName: existingUser.userName,
					email: existingUser.email,
					id: existingUser._id,
					avatarPicture: existingUser.avatarPicture,
				},
				token,
			});
		}
	}
};

export { uploadUserPicture, signUp, logIn };
