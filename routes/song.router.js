import express from "express";
import SongController from "../Controllers/songController.js";
//Controller instans
const controller = new SongController();
const SongRouter = express.Router();

// Endpoint - List
SongRouter.get("/song", (req, res) => {
	console.log("Kører liste /GET");
	controller.list(req, res);
});

export default SongRouter;
