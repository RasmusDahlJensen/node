import express from "express";
import SongController from "../Controllers/songController.js";
//Controller instans
const controller = new SongController();
const SongRouter = express.Router();

// Endpoint for list
SongRouter.get("/song", (req, res) => {
	console.log("Kører liste med GET");
	controller.list(req, res);
});

// Endpoint for details
SongRouter.get("/song/:id([0-9]*)", (req, res) => {
	console.log("kører details med GET");
	controller.details(req, res);
});

// Endpoint for create
SongRouter.post("/song", (req, res) => {
	console.log("Kørere create med post");
	controller.create(req, res);
});
export default SongRouter;
