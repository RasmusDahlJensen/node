import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = (req, res, next) => {
	// Henter authorization header
	const bearerHeader = req.headers["authorization"];
	if (bearerHeader) {
		// Udskiller token fra Bearer string
		const access_token = bearerHeader.substring(7);
		// Verificerer token med jwt og private key
		jwt.verify(access_token, process.env.PRIVATE_KEY, (err, result) => {
			if (!err) {
				next();
			} else {
				res.sendStatus(403);
			}
		});
	} else {
		res.sendStatus(401);
	}
};

export default verifyToken;
