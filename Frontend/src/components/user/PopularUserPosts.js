import { LiaReadme } from "react-icons/lia";
import { FaRegEye } from "react-icons/fa6";
import { PopularUserPosts } from '../../utils/Posts';
import Card from "../UI/Card";

function PostRow({ post, index }) {
	return (
		<div className="flex justify-between border-b pb-2">
			<div className="flex space-x-4">
				<div className="h-12 w-12">
					<img src={post.pic} className="rounded-full"  alt='Blog' />
				</div>
				<div>
					<h1>{post.title}</h1>
					<div className="flex space-x-4">
						<span className="text-sm text-gray-500">{post.date}</span>
						<div className="flex space-x-4">
							{post.tags.map((tag) => (
								<div className="border px-1 rounded-lg text-sm">{tag}</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center space-x-1 w-16 text-sm">
				<FaRegEye size={12} />
				<span>{post.views}</span>
				{index + 1}
			</div>
		</div>
	);
};


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
