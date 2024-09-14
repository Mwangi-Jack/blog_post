import Posts from "../models/postsModel.js";

export async function getAllPosts(req, res) {
	try {
		const posts = await Posts.find();
		res.status(200).json(posts);

	} catch(error) {
		return res.status(500).json({ message: 'Server error', error });
	}
}

export async function getPost(req, res) {
	const { postId } = req.params;
	console.log(postId)
	try {
		const post = await Posts.findById(postId)

		if (!post) {
			return res.status(404).json({message: 'Post Not Found'})
		}

		res.status(200).json(post)

	} catch(err) {
		return res.status(500).json({message: `An Internal error Occured ${err}`})
	}
}

export async function createPost(req, res) {
	try {
		const body = req.body;

		const post = await Posts.create(body)

		res.status(201).send(post);
	} catch (error) {
		return res.status(500).json({message: 'An Internal Error Occured'})
	}
}

export async function updatePost(req, res) {
	try {
		const {id, data } = req.body;

		const result = await Posts.updateOne({id: id}, { $set: data });

		if (!result.modifiedCount === 1) {
			return res.status(404).json({message: 'Post Not Found'})
		}

		return res.status(200).json(data);

	} catch(error) {
		return res.status(500).json({message: 'An Internal Error Occured'})
	}
}


export async function deletePost(req, res) {
	const { postId } = req.params;

	try {
		const result = await Posts.deleteOne(postId);

		if (!result.deletedCount === 1) {
			return res.status(404).json({ message: 'Post Not Found' })
		}

		res.status(200).json({ message: "Post Deleted Successfully"})

	} catch(err) {
		res.status(500).json({ message: "An Internal Error Occured"})
	}
}
