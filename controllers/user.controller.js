import UserModel from "../Models/user.model.js";

class UserController {
	list = async (req, res) => {
		let { sortkey, sortdir, limit, attributes } = req.query;
		const order = [sortkey ? sortkey : "id"];
		order.push(sortdir || "ASC");
		limit = parseInt(limit) || 1000;
		const attr = attributes
			? attributes.split(",")
			: new Array("id", "firstname", "lastname");
		console.log(attr);

		const result = await UserModel.findAll({
			attributes: attr,
			order: [order],
			limit: limit,
		});
		res.json(result);
	};

	details = async (req, res) => {
		const { id } = req.params || 0;
		const result = await UserModel.findOne({
			attributes: [
				"id",
				"firstname",
				"lastname",
				"email",
				"is_active",
				"createdAt",
				"updatedAt",
			],
			where: { id: id },
		});
		res.json(result);
	};

	create = async (req, res) => {
		// console.log(req.body);
		const { firstname, lastname, email, password } = req.body;

		if (firstname && lastname && email && password) {
			const model = await UserModel.create(req.body);
			return res.json({
				newId: model.id,
			});
		} else {
			res.sendStatus(418);
		}
	};

	update = async (req, res) => {
		// console.log("user update");
		const { id } = req.params || 0;
		const { firstname, lastname, email, password } = req.body;

		if (id && firstname && lastname && email && password) {
			const model = await UserModel.create(req.body);
			return res.json({
				msf: "Record updated",
			});
		} else {
			res.sendStatus(418);
		}
		s;
	};
}

export default UserController;
