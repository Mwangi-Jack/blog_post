import User from "../models/userModel.js"


export async function login(req, res) {
	try {
		const { formData } = req.body;

		const user  = User.findOne({formData})

		if (!user) {
			return res.status(404).json({ message: 'User Not Found'})
		}

		res.send(200).json(user);
	} catch (err) {
		return res.status(500).json({ message: "An Internal Error Occured"})
	}
}

export async function siginin(req, res) {
	try {
		const { formData } = req.body;

		const user = User.create(formData);

		if (!user) {
			return res.status(404).json({ message: 'User Not Found'})
		}

		res.send(200).json(user);
	} catch (error) {
		return res.status(500).json({ message: "An Internal Error Occured"})
	}
}

export async function logout(req, res) {
	res.send('LOGOUT ROUTE')
}
