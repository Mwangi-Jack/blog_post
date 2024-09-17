import { Link } from "react-router-dom";
import UserIndex from "./UserIndex";
// import { UserPosts } from "../../utils/Posts";
import Card from "../../components/UI/Card";
import usePostsHook from '../../hooks/usePostsHook';


function UserPosts () {
	const user = JSON.parse(localStorage.getItem('user'));
	const { getUserPosts } = usePostsHook();

	const userposts = getUserPosts(user._id);

	return (
		<UserIndex>
			<div className="mt-20 mx-4">
				<h1 className="text-2xl">Your Posts</h1>
				<hr  className="bg-[#7C4EE4] h-[2px]"/>
				{
					userposts.length > 0 ? (
						<div className="md:grid grid-cols-4 gap-4">
							{ userposts.map((post) => <Card edit={true} post={post} />)}
						</div>
					) : (
						<div className="flex flex-col justify-center items-center h-96 space-y-4  mt-8">
							<img src="/static/images/emptyblogview.png" className="h-72" alt="No Posts" />
							<Link to='/dashboard/new-post'  className="text-[#7C4EE4]" >Write Your First Blog</Link>
						</div>
					)
				}
			</div>
		</UserIndex>
	);
};

export default UserPosts;
