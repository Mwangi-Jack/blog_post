import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		Fname: { type:  String, required: true },
		Sname: { type: String, required: true },
		email: { type: String, required : true },
		phone: { type: String, default: null },
		password: { type: String, required: true },
		saved: { type: Array, default: [], ref: 'Posts'},
		profile_url: { type: String, default: null}
	}
)

const User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
