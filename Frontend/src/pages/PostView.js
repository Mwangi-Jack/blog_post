import { useParams } from "react-router-dom";
import { allPosts } from "../utils/Posts";
import NavBar from "../components/NavBar";
import PopularPosts from "../components/PopularPosts";
import Footer from "../components/Footer";

function PostView() {
	const { id } = useParams();
	const post = allPosts.find((post) => post.id == id);

	return (
		<div>
			<NavBar />
			<div className="m-4 mt-16 space-y-4">
				<div className="text-sm space-y-6 md:mx-20">
					<div className="space-x-2">
						<span className="font-bold">{post.category}</span>
						<span>{post.date}</span>
					</div>
					<div className="text-4xl md:text-5xl font-bold">{post.title}</div>
				</div>
				<div className="space-y-4">
					<img src={post.pic} alt='banner' className="w-full md:h-[35rem] rounded"/>
					<div className="md:mx-20 space-y-4">
						<div>{post.text}</div>
						<div className="flex justify-center">
							<div className="w-[60rem] my-4">
								<div className="border-l-4 border-[#7C4EE4] pl-2 font-mono">{post.quote ? `${post.quote}`: null }</div>
								<div className="font-bold ml-4">- {post.quote_name ? `${post.quote_name}`: null}</div>
							</div>
						</div>
						<div>{post.text_two ? `${post.text_two}` : null }</div>
						<div className="flex justify-center">
							<img src="/static/images/featured2.png"  alt="featured" />
						</div>
						<div>{post.text_three ? `${post.text_three}` : null}</div>
					</div>
				</div>
			</div>
			<PopularPosts />
			<Footer />
		</div>
	)
};

export default PostView;
