import express from "express";

const router = express.Router();

router.get("/song", (req, rest) => {
	console.log("kalder /song med GET");
});

router.get("/song/:id([0-9]*)", (req, rest) => {
	console.log("Detaljer kalder /song med GET");
});

router.post("/song", (req, rest) => {
	console.log("kalder /song med POST");
});

router.put("/song", (req, rest) => {
	console.log("kalder /song med PUT");
});

router.delete("/song", (req, rest) => {
	console.log("kalder /song med delete");
});

export { router };
