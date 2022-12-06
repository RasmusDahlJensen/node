import express from "express";
import SongRouter from "./Routes/song.router.js";
import artistRouter from "./Routes/artist.router.js";
import dotenv from "dotenv";
import InitRouter from "./Routes/init.router.js";
import UserRouter from "./Routes/user.router.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

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

//Bundles

app.use(SongRouter);
app.use(artistRouter);
app.use(InitRouter);
app.use(UserRouter);

app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
});
