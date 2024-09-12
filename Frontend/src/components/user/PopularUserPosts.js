import { PopularUserPosts } from '../../utils/Posts';
import Card from "../UI/Card";


function PopularUserPostsView() {
	return (
		<div className="my-16 mx-4">
			<h1 className="text-xl font-bold">Your Popular Posts</h1>
			<hr className="h-[2px] my-1 bg-[#7C4EE4]" />
			<div className="my-6 md:grid md:grid-cols-4 md:gap-16">
				{PopularUserPosts.map((post, index) => <Card post={post} key={index} edit={true}/> )}
			</div>
		</div>
	);
};

export default PopularUserPostsView;
