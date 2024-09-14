import mongoose from "mongoose";

const postsModel = new mongoose.Schema({
	author_id: { type: String, required: true},
	tags: { type: Array, default: []},
	title: { type: String, required: true },
	description: { type: String, required: true },
	featured: { type: Boolean, default: false },
	popular: { type: Boolean, default: false },
	views: { type: Number, default: 1 },
	rating: { type: Number, default: 1 },
	pic: { type: String, required: true },
	category: { type: String, required: true },
	content: { type: String, required: true },
	created_at: { type: Date, required: true },
})

const Posts =  mongoose.models.Posts || mongoose.model('Posts', postsModel);

export default Posts;
