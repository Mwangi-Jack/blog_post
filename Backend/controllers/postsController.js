import mongoose from "mongoose";
import Posts from "../models/postsModel.js";

export async function getAllPosts(req, res) {
	const { page = 1, limit = 8 } = req.query;
 	try {
		const posts = await Posts.find()
		.limit(limit * 1)
		.skip((page - 1)  * limit)
		.exec();
		const count = await Posts.countDocuments();

		res.status(200).json({ posts, totalPages: Math.ceil(count / limit), currentPage: page });

	} catch(error) {
		return res.status(500).json({ message: 'Server error', error });
	}
}

export async function getPost(req, res) {
	const { postId } = req.params;
	try {
		const postWithAuthor = await Posts.aggregate([
			{
				$match: {_id: new mongoose.Types.ObjectId(postId)}
			},
			{
				$lookup: {
					from: 'users',
					localField: 'author_id',
					foreignField: '_id',
					as: 'author'
				}
			},
			{
				$unwind: '$author'
			},
			{
				$project: {
					author_id: 1,
					tags: 1,
					title: 1,
					description: 1,
					featured: 1,
					popular: 1,
					views: 1,
					rating: 1,
					banner_url: 1,
					category: 1,
					content: 1,
					created_at: 1,
					'author.Fname': 1,
					'author.Sname': 1,
					'author.profile_url': 1
				}
			}
		]);

		if (!postWithAuthor || postWithAuthor.length === 0) {
			return res.status(404).json({ message: 'Post Not Found'})
		}

		return res.status(200).json(postWithAuthor[0])
	} catch(err) {
		console.log(err)
	}
}

export async function createPost(req, res) {
	try {
		const body = req.body;

		// console.log("BLOG TO CREATE:::", body)

		const post = await Posts.create(body)

		res.status(201).send(post);
	} catch (error) {
		console.log(error.message);
		return res.status(500).json({message: error.message})
	}
}

export async function updatePost(req, res) {
	try {
		const data = req.body;
		const { postId } = req.params;
		const post = await Posts.findByIdAndUpdate(
			postId,
			{ $set: data },
			{ new: true }
		);

		return res.status(200).json(post);

	} catch(error) {
		return res.status(500).json({message: 'An Internal Error Occured'})
	}
}


export async function deletePost(req, res) {
	const { postId } = req.params;
	console.log("POST ID TO DELETE:::", postId)
	try {
		const result = await Posts.deleteOne({ _id: postId});

		if (result.deletedCount !== 1) {
			return res.status(404).json({ message: 'Post Not Found' })
		}

		return res.status(200).json({ message: "Post Deleted Successfully"})

	} catch(err) {
		return res.status(500).json({ message: "An Internal Error Occured"})
	}
}
