import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const verifyJWT = (req, res, next) => {
	const authHeader = req.headers['authorization'];
	// console.log(authHeader);
	const token = authHeader && authHeader.split(' ')[1];
	// console.log(token);

	if(token){
		jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
			if(err)
				return res.status(403).json({error: "Access Token is invalid"});


			req.user = new mongoose.Types.ObjectId(user.id);
			return next();
		});
	}
	else
		return res.status(401).json({error : "No access token"});
}

export {verifyJWT};
