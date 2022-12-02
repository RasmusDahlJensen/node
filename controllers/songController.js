import db from "../Config/mysqlConfig.js";

class SongController {
	constructor() {
		console.log("Song Controller kører");
	}

	//Henter en liste af sange med navn på artist
	list = (req, res) => {
		const sql =
			"SELECT s.id, s.title, a.name FROM song s JOIN artist a ON s.artist_id = a.id";
		db.query(sql, (err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.json(result);
			}
		});
	};
	//Henter detaljer fra en specifik sang, med ID, titel, brødtekst og artist navn

	details = (req, res) => {
		const id = req.params.id || 0;
		const sql =
			"SELECT s.title, s.content, a.name FROM song s JOIN artist a ON s.artist_id = a.id WHERE s.id = ?";

		db.query(sql, [id], (err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.json(result);
			}
		});
	};
	//Create user
	create = (req, res) => {
		//Destructure
		const { title, content, artist_id } = req.body;

		if (title && content && artist_id) {
			const sql = `INSERT INTO song(title, content, artist_id) 
							VALUES(?, ?, ?)`;

			db.query(sql, [title, content, artist_id], (err, result) => {
				if (err) {
					console.error(err);
				} else {
					console.log(result);
				}
			});
		}
	};
}

export default SongController;
