import express from "express";
import SongController from "../Controllers/songController.js";
const controller = new SongController();
const router = express.Router();

// Endpoint - List
SongRouter.get("/song", (req, res) => {
	console.log("Liste: Kalder /song med GET");
	controller.list(req, res);
});

export default SongRouter;

export { router };
