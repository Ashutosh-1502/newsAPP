import Users from '../modals/userModal.js';
import bcrypt from "bcrypt";
import {nanoid} from "nanoid";
import jwt from 'jsonwebtoken';
// import {getAuth} from "firebase-admin/auth";

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


const generateUsername = async (email) => {
	let username = email.split("@")[0];
	const isExistedUsername = await Users.findOne({"personal_info.username": username});
	isExistedUsername ? username +=
		nanoid()
			.substring(0,
				5) : "";
	return username;
}
const formatDataToSend = (user) => {
	const access_token = jwt.sign({id: user._id},
		process.env.SECRET_KEY)
	return {
		avatar: user.personal_info.avatar,
		email: user.personal_info.email,
		username: user.personal_info.username,
		fullName: user.personal_info.fullName,
		access_token,
	}
}

const signUp = async (req,
					  res) => {
	try {
		const {
				  fullName,
				  email,
				  password
			  } = req.body;
		if (fullName?.length <
			3)
			return res
				.status(403)
				.json({error: 'Full name must be at least 3 characters long'});

		if (!email ||
			!password)
			return res
				.status(403)
				.json({
					error: `Please Enter the ${!email ?
						"Email Address" :
						"Password"}`
				});
		if (!emailRegex.test(email))
			return res.status(403)
				.json({error: "Email is Invalid"})
		if (!passwordRegex.test(password))
			return res
				.status(403)
				.json({error: "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters"})

		const hashedPassword = await bcrypt.hash(password,
			12);
		const username = await generateUsername(email);
		const newUser = new Users({
			personal_info: {
				fullName,
				email,
				password: hashedPassword,
				username
			}
		})
		await newUser.save();
		return res.status(200)
			.json(formatDataToSend(newUser));
	} catch (e) {
		res.status(500)
			.json({error: "Failed to sign up. Please try again"});
	}
}

const signIn = async (req,
					  res) => {
	try {
		const {
				  email,
				  password
			  } = req.body;
		const isUserExist = await Users.findOne({"personal_info.email": email});
		if (!isUserExist)
			return res.status(403)
				.json({error: "Email not Found"});

		bcrypt.compare(password,
			isUserExist.personal_info.password,
			(err,
			 isMatch) => {
				if (err)
					return res.status(403)
						.json({error: "Something went wrong please Login again"});
				if (!isMatch)
					return res.status(403)
						.json({error: "Incorrect Password"});

				return res.status(200)
					.json(formatDataToSend(isUserExist));
			})

		/*
		if (!isUserExist.google_auth) {
			bcrypt.compare(password,
				isUserExist.personal_info.password,
				(err,
				 isMatch) => {
					if (err)
						return res.status(403)
							.json({error: "Something went wrong please Login again"});
					if (!isMatch)
						return res.status(403)
							.json({error: "Incorrect Password"});

					return res.status(200)
						.json(formatDataToSend(isUserExist));
				})
		} else {
			return res.status(403)
				.json({error: "Account was created using google. Try logging in with Google"});
		}
		 */

	} catch (err) {
		res.status(500)
			.json({error: "Failed to Sign in. Please try again"});
	}
}

/*
const googleAuth = (req, res) => {
	let {access_token} = req.body;
	getAuth()
		.verifyIdToken(access_token)
		.then(async (decodedUser) => {
			let { email, name, picture } = decodedUser;
			picture = picture.replace("s96-c", "s384-c");

			let user = await Users.findOne({"personal_info.email": email})
				.select("personal_info.fullName personal_info.username personal_info.profile_img google_auth")
				.then((u) => {
					console.log(u);
					return u || null
				}) .catch((err) => {
					return res.status(403).json({"error" : err.message});
				})
			console.log(user);

			if(user) {
				if(!user.google_auth){
					return res.status(403).json({"error": "This Email was signed up without google. Please login with the password to access the account"});
				}
			}
			else {
				const username = await generateUsername(email);
				user =
					new Users({
						personal_info: {
							fullName: name,
							email,
							profile_img: picture,
							username,
						},
						google_auth: true,
					})
				await user.save()
					.then(u => {
						user =
							u;
					})
					.catch(err => {
						return res.status(500)
							.json({"error": err.message});
					});
			}
			return  res.status(200).json(formatDataToSend(user));

		})
		.catch(err => {
			return res.status(500).json({"error" : "Failed to Authenticate you with Google. Try with another Account"});
		})
}

 */
export {signUp, signIn}
