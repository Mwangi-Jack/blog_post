import mongoose from "mongoose";
import User from "../models/userModel.js";


export async function getUsers(req, res) {
	try {
		const users = await User.find();

		res.status(200).json(users);
	} catch(error) {
		res.status(500).json({ message: "An Internal Error Occured"})
	}
}
export async function createUser(req, res) {
	try {
		const { formData }  = req.body;
		const user = await User.create(formData);

		res.status(201).json(user);
	} catch(error) {
		res.status(500).json({ message: "An Internal Error Occured"})
	}
}

export async function updateUser(req, res) {
	const { userId } = req.params;
	const formData = req.body;

	try {
		const user = await User.findByIdAndUpdate(
			userId,
			{ $set: formData },
			{ new: true }
		);

		return res.status(200).json(user)
	} catch(err) {
		return res.status(500).json({ message: "An Internal Error Occured"})
	}
}


export async function deleteUser(req, res) {
	try {
		const { userId } = req.params;

		const result = await User.findByIdAndDelete(userId);

		return res. status(200).json({ message: "User Deleted Successfully"})
	} catch(err) {
		return res.status(500).json({ message: "An Internal Error Occured"})
	}
}
