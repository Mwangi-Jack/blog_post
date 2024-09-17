import User from "../models/userModel.js"


export async function login(req, res) {
	console.log("LOGIN REQUEST BODY:::",req.body)
	try {
		const formData  = req.body;

		const user  = await User.findOne(formData)

		if (!user) {
			return res.status(404).json({ message: 'User Not Found'})
		}

		return res.status(200).json(user);
	} catch (err) {
		return res.status(500).json({ message: "An Internal Error Occured"})
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
		return res.status(500).json({ message: "An Internal Error Occured"})
	}
}

export async function logout(req, res) {
	res.send('LOGOUT ROUTE')
}
