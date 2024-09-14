import { Link } from "react-router-dom";
import usePostsHook from "../hooks/usePostsHook";
import Card from "./UI/Card"

function PopularPosts() {
	const { posts, isLoading } = usePostsHook();

	const popularPosts = posts.slice(2, 10);
	if (isLoading) {
		return <p>Loading....</p>
	}
	return (
		<div className="mx-4 my-10 md:mx-20">
			<div className="flex justify-between  p-1">
				<h1 className="font-bold text-3xl">Popular Posts</h1>
				<div>
					<Link className="border rounded px-2 py-1 text-xl font-medium border-[#7C4EE4] text-[#7C4EE4] p-2" to='/blog' >View All</Link>
				</div>
			</div>
			<div className="md:grid md:grid-cols-4 md:gap-10">
				{popularPosts.map((post) => (
					<Card post={post} />
				))}
			</div>
		</div>
	)
}

export default PopularPosts;
