import { Link } from "react-router-dom";
import Card from "../UI/Card";
import usePostsHook from '../../hooks/usePostsHook';


function PopularUserPostsView() {
	const { posts } = usePostsHook();
	const user = JSON.parse(localStorage.getItem('user'));

	const userposts = posts.filter(post => post.author_id === user._id);

	const userpopularposts = userposts.filter(post => post.popular === true)
	console.log("user Popular posts:::",userpopularposts)

	return (
		<div className="my-16 mx-4">
			<h1 className="text-xl font-bold">Your Popular Posts</h1>
			<hr className="h-[2px] my-1 bg-[#7C4EE4]" />
			{
				userpopularposts > 0 ? (
					<div className="my-6 md:grid md:grid-cols-4 md:gap-4">
						{userpopularposts.map((post, index) => <Card post={post} key={index} edit={true}/> )}
					</div>
				) : (
					<div className="flex flex-col justify-center items-center h-96 space-y-4  mt-8">
						<img src="/static/images/emptyblogview.png" className="h-72" alt="No Posts" />
						<Link to='/dashboard/new-post'  className="text-[#7C4EE4]" >Write Your First Blog</Link>
					</div>
				)
			}
		</div>
	);
};

export default PopularUserPostsView;
