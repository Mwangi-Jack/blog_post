import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";


function Card({ post, edit }) {
	return (
		<div className="my-10  h-90">
			<img src={post.pic} alt={post.id} className="w-full" />
			<div className="mt-4 space-y-2">
				<div className="text-sm space-x-2">
					<span className="font-bold">{post.category}</span>
					<span>{post.date}</span>
				</div>
				<div className="space-y-2">
					<h1 className="font-bold text-xl">{post.title}</h1>
					<p className={`${edit ? 'hidden': null}`}>{post.text}</p>
					<div className={`text-sm flex  items-center space-x-2 ${edit ? null: 'hidden'}`}>
						<FaRegEye />
						<span>{post.views} Views</span>
					</div>
				</div>
			</div>
			<div className={`${edit ? 'hidden': 'mt-2'}`}>
				<Link to={`/posts/${post.id}`}>Read More...</Link>
			</div>
		</div>
	)
}

export default Card;
