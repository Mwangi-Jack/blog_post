import UserIndex from "./UserIndex";
import { UserPosts } from "../../utils/Posts";
import Card from "../../components/UI/Card";

function userPosts () {
	return (
		<UserIndex>
			<div className="mt-20 mx-4">
				<h1 className="text-2xl">Your Posts</h1>
				<hr  className="bg-[#7C4EE4] h-[2px]"/>
				<div className="grid grid-cols-4 gap-4">
					{ UserPosts.map((post) => <Card edit={true} post={post} />)}
				</div>
			</div>
		</UserIndex>
	);
};

export default userPosts;
