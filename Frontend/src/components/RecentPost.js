import RecentFeatured from "./RecentFeatured";
import Button from "./UI/Button";
import Card from "./UI/Card";
import { recentPosts } from "../utils/Posts";


function RecentPost() {
	return (
		<div className="mx-4 my-10 md:-mt-44 md:mx-20">
			<div className="flex justify-between  p-1">
				<h1 className="font-bold text-3xl">Our Recent Post</h1>
				<Button text={'View All'} bg={'#7C4EE4'} />
			</div>
			<div className="mt-4 ">
				<RecentFeatured />
				<div className="mt-4 md:grid md:grid-cols-3 md:gap-16">
					{ recentPosts.map((post) => (
						<Card post={post} />
					))}
				</div>
			</div>
		</div>
	);
}

export default RecentPost;
