import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from 'html-react-parser';
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiCommentAdd } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";
import usePostsHook from "../hooks/usePostsHook";
import NavBar from "../components/NavBar";
import PopularPosts from "../components/PopularPosts";
import Footer from "../components/Footer";


function PostView() {
	const [ isLike, setIsLike ] = useState(false);
	const [ isDisLike, setIsDislike ] = useState(false);
	const { id } = useParams();
	const { posts , isLoading } = usePostsHook();

	const post = posts.find((post) => post._id === id);
	if (isLoading) {
		return <p>Loading...</p>
	}

	const toggleLike = () => {
		setIsDislike(false);
		setIsLike(!isLike)


	}

	const toggleDisLike = () => {
		setIsDislike(!isDisLike)
		setIsLike(false);

	}

	return (
		<div>
			<NavBar />
			<div className="m-4 mt-16 space-y-4">
				<div className="text-sm space-y-6 md:mx-20">
					<div className="space-x-2">
						<span className="font-bold">{post.category}</span>
						<span>{post.created_at}</span>
					</div>
					<div className="text-4xl md:text-5xl font-bold">{post.title}</div>
				</div>
				<div className="space-y-4">
					<div className="flex justify-center">
						<img src={post.banner_url} alt={post.title} className=" w-11/12 md:h-[25rem] rounded"/>
					</div>
					<div className="md:mx-20 space-y-4">
						<div>{post.description}</div>
						<div>{parse(post.content)}</div>
					</div>
				</div>
				<div className="flex justify-center py-10">
					<div className="flex justify-between  w-3/4">
						<div className=" cursor-pointer text-center  flex flex-col items-center">
							{
								isDisLike ? <BiSolidDislike onClick={toggleDisLike} size={30} color="#7C4EE4"/>
								:
								<BiDislike onClick={toggleDisLike}  size={30} color="#7C4EE4"/>
							}
							<p className="text-xs">Dislike</p>
						</div>
						<div className="flex space-x-20 cursor-pointer">
							<FaShareAlt size={30} color="#7C4EE4"/>
							<BiCommentAdd  size={30} color="#7C4EE4"/>
						</div>
						<div className=" cursor-pointer flex flex-col items-center">
							{
								isLike ?  <BiSolidLike onClick={toggleLike} size={30} color="#7C4EE4" /> :
								<BiLike  onClick={toggleLike} size={30} color="#7C4EE4"/>
							}
							<p className="text-xs">Like</p>
						</div>
					</div>
				</div>
			</div>
			<PopularPosts />
			<Footer />
		</div>
	)
};

export default PostView;
