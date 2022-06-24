import { v2 as cloudinary } from "cloudinary";
import usersModel from "../models/usersModel.js";
import encryptPassword from "../utils/encryptPassword.js";


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

export { uploadUserPicture, signUp };
