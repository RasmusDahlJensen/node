import db from "../Config/mysqlConfig.js";

class artistController {
	constructor() {}

	list = (request, response) => {
		// console.log(request.query);

		let { sortkey, sortdir, limit, attributes } = request.query;
		sortkey = sortkey ? sortkey : "id";
		sortdir = sortdir ? sortdir : "ASC";
		limit = limit ? `LIMIT ${limit}` : "";
		attributes = attributes ? attributes : "id, name";

		const sql = `SELECT ${attributes}
					FROM artist
					ORDER BY ${sortkey} ${sortdir}
					${limit}`;

		db.query(sql, (err, result) => {
			if (err) {
				console.error(err);
			} else {
				response.json(result);
			}
		});
	};
}

export default artistController;
