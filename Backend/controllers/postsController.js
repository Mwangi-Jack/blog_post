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

		console.log("BLOG TO CREATE:::", body)

		const post = await Posts.create(body)

		res.status(201).send(post);
	} catch (error) {
		return res.status(500).json({message: 'An Internal Error Occured'})
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
