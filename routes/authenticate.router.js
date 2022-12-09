import express from "express";
import AuthenticateController from "../Controllers/authenticate.controller.js";
import verifyToken from "../Middleware/verifyToken.js";
const router = express.Router();

const controller = new AuthenticateController();

router.post("/login", (req, res) => {
	{
		controller.login(req, res);
	}
});

router.get("/protected", verifyToken, (req, res) => {
	{
		controller.protected;
	}
});

export { router };
