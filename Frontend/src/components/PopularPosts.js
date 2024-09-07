import Button from "./UI/Button"
import Card from "./UI/Card"
import { popularPosts } from "../utils/Posts";

function PopularPosts() {
	return (
		<div className="mx-4 my-10 md:mx-20">
			<div className="flex justify-between  p-1">
				<h1 className="font-bold text-3xl">Popular Posts</h1>
				<Button text={'View All'} bg={'#7C4EE4'} />
			</div>
			<div className="md:grid md:grid-cols-3 md:gap-16">
				{popularPosts.map((post) => (
					<Card post={post} />
				))}
			</div>
		</div>
	)
}

export default PopularPosts;
