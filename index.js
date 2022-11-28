import express from "express";
import { router as songRouter } from "./routes/song.router.js";

const app = express();
const port = 4000;

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.get("/about", (req, res) => {
	res.send("About us");
});

app.get("/contact", (req, res) => {
	res.send("Contact us");
});

app.use(songRouter);

app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
});
