import express from "express";
import { signUp, uploadUserPicture, logIn, updateProfile, getProfile, } from "../controller/usersController.js";
import { multerUploads } from "../middlewares/multer.js";
import jwtAuth from "../middlewares/jwtAuth.js";

const router = express.Router();

router.post("/imageUpload", multerUploads.single("image"), uploadUserPicture);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/updateProfile", updateProfile);


router.get("/my-account", jwtAuth, getProfile);
// router.get("/all", getAllUsers)

export default router;