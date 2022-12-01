import db from "../Config/mysqlConfig.js";

class SongController {
	constructor() {
		console.log("Song Controller has been fired");
	}

	list = (req, res) => {
		const sql = "SELECT id, title, artist_id FROM song";
		db.query(sql, (err, result) => {
			if (err) {
				console.error(err);
			} else {
				res.json(result);
			}
		});
	};
}

export default SongController;
