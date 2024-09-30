import mongoose from "mongoose";

const postsModel = new mongoose.Schema({
	author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
	tags: { type: Array, default: []},
	title: { type: String, required: true },
	description: { type: String, default: 'A small description about this blog is here' },
	featured: { type: Boolean, default: false },
	popular: { type: Boolean, default: false },
	views: { type: Number, default: 1 },
	rating: { type: Number, default: 1 },
	banner_url: { type: String, default: null},
	category: { type: String, required: true },
	content: { type: String, required: true },
	created_at: { type: Date, required: true },
	likes: { type: Number, default: 0 }
})

const Posts =  mongoose.models.Posts || mongoose.model('Posts', postsModel);

export default Posts;
