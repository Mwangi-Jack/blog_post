import RecentFeatured from "./RecentFeatured";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import Card from "./UI/Card";
import usePostsHook from "../hooks/usePostsHook";


function RecentPost() {
	const { posts, isLoading } =usePostsHook();

	const recentPosts = posts.slice(0, 4);

	return (
		<div className="mx-4 my-10 md:-mt-44 md:mx-20">
			<div className="flex justify-between  p-1">
				<h1 className="font-bold text-3xl">Our Recent Post</h1>
				<div>
					<Link className="border rounded px-2 py-1 text-xl font-medium border-[#7C4EE4] text-[#7C4EE4] p-2" to='/blog' >View All</Link>
				</div>
			</div>
			<div className="mt-4 ">
				<RecentFeatured />
				<div className="mt-4 md:grid md:grid-cols-4 md:gap-16">
					{ recentPosts.map((post) => (
						<Card post={post} />
					))}
				</div>
			</div>
		</div>
	);
}

export default RecentPost;
