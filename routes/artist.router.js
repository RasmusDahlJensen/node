import express from "express";
import artistController from "../Controllers/artistController.js";

const artistRouter = express.Router();
//Controller instans
const controller = new artistController();

artistRouter.get("/api/artist", (request, response) => {
	controller.list(request, response);
});

export default artistRouter;
