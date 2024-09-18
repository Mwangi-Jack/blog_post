import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import usePostsHook from "../hooks/usePostsHook";
import NavBar from "../components/NavBar";
import PopularPosts from "../components/PopularPosts";
import Footer from "../components/Footer";

function PostView() {
	const { id } = useParams();
	const { posts , isLoading } = usePostsHook();

	const post = posts.find((post) => post._id === id);
	if (isLoading) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<NavBar />
			<div className="m-4 mt-16 space-y-4">
				<div className="text-sm space-y-6 md:mx-20">
					<div className="space-x-2">
						<span className="font-bold">{post.category}</span>
						<span>{post.created_at}</span>
					</div>
					<div className="text-4xl md:text-5xl font-bold">{post.title}</div>
				</div>
				<div className="space-y-4">
					<img src={post.pic} alt={post.title} className="border w-full md:h-[25rem] rounded"/>
					<div className="md:mx-20 space-y-4">
						<div>{post.description}</div>
						<div>{parse(post.content)}</div>
					</div>
				</div>
			</div>
			<PopularPosts />
			<Footer />
		</div>
	)
};

export default PostView;
