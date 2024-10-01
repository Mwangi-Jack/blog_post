import User from "../models/userModel.js"
import { getGoogleAccessToken, getGoogleUserInfo } from "../utils/googleAuth.js";


export async function login(req, res) {
	console.log("LOGIN REQUEST BODY:::",req.body)
	try {
		const formData  = req.body;

		const user  = await User.findOne(formData)

		if (!user) {
			return res.status(404).json({ message: 'Wrong Email or Password'})
		}

		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json({ message: 'Internal Server Error'})
	}
}

export async function siginin(req, res) {

	console.log("REGISTER REQUEST BODY:::",req.body)
	try {
		const formData = req.body;
		console.log(req.body);

		const user = await User.create( formData );

		if (!user) {
			return res.status(404).json({ message: 'User Not Found'})
		}

		return res.status(200).json(user);
	} catch (error) {
		return res.status(500).json({ message: 'Internal Server Error'})
	}
}

export async function googleSignin(req, res) {
	const { code } = req.body;

	try {
		const tokenData = await getGoogleAccessToken(code);

		const userInfo = await getGoogleUserInfo(tokenData.access_token);
		const newUser = {
			Fname: userInfo.given_name,
			Sname: userInfo.family_name,
			email: userInfo.email,
			password: userInfo.id,
			profile_url: userInfo.picture
		}

		console.log("USER INFO:::", newUser);

		const user = await User.findOne(newUser);

		if (!user) {
			const user = await User.create(newUser);
			return res.status(200).json(user)
		}

		return res.status(200).json(user)

	} catch (error) {
		console.log("Error Handling Google Login", error);
		res.status(500).json({ message: 'Internal Server Error'})
	}
}

export async function logout(req, res) {
	res.send('LOGOUT ROUTE')
}
