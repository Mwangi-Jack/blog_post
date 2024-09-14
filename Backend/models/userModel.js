import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		Fname: { type:  String, required: true },
		Sname: { type: String, required: true },
		email: { type: String, required : true },
		phone: { type: Number, required: true },
		password: { type: String, required: true },
		profile_url: { type: String, required: true }
	}
)

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
