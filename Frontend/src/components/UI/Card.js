import { Link } from "react-router-dom";

function Card({ post }) {
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
					<p>{post.text}</p>
				</div>
			</div>
			<div className="mt-2">
				<Link to={`/posts/${post.id}`}>Read More...</Link>
			</div>
		</div>
	)
}

export default Card;
