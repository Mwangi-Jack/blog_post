import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

function Rating({rate}) {
	return (
		<div className="flex space-x-1">
			<FaStar />
			<FaStar />
			<FaStar />
			<FaStarHalfAlt />
			<FaRegStar />
		</div>
	)
}

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
					<div className={`${edit ? null: 'hidden'}`}>
						<div className="flex justify-between px-4">
							<Rating rate={4}/>
							<div className="text-sm flex  items-center space-x-2">
								<FaRegEye />
								<span>{post.views} Views</span>
							</div>
						</div>
						<div className="flex justify-between my-6 px-4">
							<button className="border rounded px-4 text-green-500 border-green-600">Edit</button>
							<button className="border rounded px-4 text-red-500 border-red-500">Delete</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${edit ? 'hidden': 'mt-2'}`}>
				<Link to={`/posts/${post._id}`}>Read More...</Link>
			</div>
		</div>
	)
}

export default Card;
