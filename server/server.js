import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import categoriesRoute from "./routes/categoriesRoute.js";
import gendersRoute from "./routes/gendersRoute.js";
import itemsRoute from "./routes/itemsRoute.js";
import usersRoute from "./routes/usersRoute.js";
import { cloudinaryConfig } from "./config/cloudinaryConfig.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

const startServer = () => {
	app.listen(port, () => {
		console.log("Server is running on " + port + " port");
	});
};

const loadRoutes = () => {
	app.use("/api/categories", categoriesRoute);
	app.use("/api/genders", gendersRoute);
	app.use("/api/items", itemsRoute);
	app.use("/api/users", usersRoute);
};

const addMiddleware = () => {
	app.use(express.json());
	app.use(
		express.urlencoded({
			extended: true,
		})
	);
	const corsOptions = {
		origin: "http://localhost:3000", // or '*'
		credentials: true,
	};
	app.use(cors(corsOptions));
	cloudinaryConfig()
};

const mongoDbConection = async () => {
	try {
		await mongoose.connect(process.env.DB);
		console.log("Connection to Mongo DB established");
	} catch (error) {
		console.log("Error connection to Mongo DB", error);
	}
};



(async () => {
	await mongoDbConection();
	addMiddleware();
	loadRoutes();
	startServer();
})();
