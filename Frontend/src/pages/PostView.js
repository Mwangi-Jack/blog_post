import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import parse from 'html-react-parser';
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiCommentAdd } from "react-icons/bi";
import { IoBookmark } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import PageControls from "../components/UI/PageControls";
import { FaShare } from "react-icons/fa6";
import usePostsHook from "../hooks/usePostsHook";
import useUserHook from "../hooks/useUserHook";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import countTimeFrom from "../utils/countTimeFrom";
import Card from "../components/UI/Card";


function PostView() {
	const { id } = useParams();
	const { posts, isLoading, getOnePost } = usePostsHook();
	const user = JSON.parse(localStorage.getItem('user'));

	const [ isLike, setIsLike ] = useState(false);
	const [ isSaved, setIsSaved ] = useState(user.saved.includes(id));
	const [ postOnView, setPostOnView ] = useState({});

	const { savePost } = useUserHook();


	// console.log("ONE POST:::", getOnePost(id))

	useEffect(() => {
		const fetchPost = async () => {
			const post = await getOnePost(id);
			setPostOnView(post);
		}

		fetchPost();
	},[id])

	if ( isLoading ) {
		return <p>Loading...</p>
	}

	const authorPosts = posts.filter(post => post.author_id === postOnView.author_id)

	const toggleLike = () => {
		setIsLike(!isLike);
	}

	const handlePostSave = () => {
		setIsSaved(!isSaved);
		 savePost(postOnView._id);
	}

	return (
		<div>
			<NavBar />
			<div className="m-4 mt-16 space-y-4">
				<div className="md:px-28 flex justify-center">
					<h1 className="text-3xl md:text-6xl font-raleway font-extrabold">{postOnView.title}</h1>
				</div>
				<div className="pl-2 flex md:pl-36 space-x-3">
					{
						postOnView.author.profile_url ?
						<img src="/static/images/photo.jpeg"className="h-10 rounded-[50%]" alt={postOnView.author.Fname} />
						:
						<img src='/static/images/no-profile.png' className="h-8 rounded-full" alt={postOnView.author.Fname} />
					}
					<div className="">
						<p className="text-sm">{postOnView.author.Fname ? `${postOnView.author.Fname} ${postOnView.author.Sname}`: 'loading' }</p>
						<div className="space-x-2 text-xs">
							<span>4 Min Read</span>
							<span>{countTimeFrom(postOnView.created_at)}</span>
						</div>
					</div>
				</div>
				<div className="space-y-4">
					<div className="flex justify-center">
						<img src={postOnView.banner_url} alt={postOnView.title} className="w-11/12 md:w-2/3 md:h-[25rem] rounded"/>
					</div>
					<div className="md:mx-36">
						{parse(postOnView.content)}
					</div>
				</div>
				<div className="flex justify-center py-10">
					<div className="flex justify-between border-y py-1 px-4 w-full md:w-3/5">
						<div className="flex space-x-4">
							<div className=" cursor-pointer flex flex-col items-center">
								{
									isLike ?  <BiSolidLike data-tooltip-id="like" data-tooltip-content="Dislike" onClick={toggleLike} size={24} color="#7C4EE4" /> :
									<BiLike data-tooltip-id="like" data-tooltip-content="Like"  onClick={toggleLike} size={24} color="#7C4EE4"/>
								}
								 <Tooltip id="like" place="top" style={{ backgroundColor: 'black', color: 'white' }} />
							</div>
							<div  className=" cursor-pointer flex flex-col items-center">
								<BiCommentAdd  data-tooltip-id="comment" data-tooltip-content="Add Comment" size={24} color="#7C4EE4"/>
								<Tooltip id="comment" place="top" style={{ backgroundColor: 'black', color: 'white' }} />
							</div>

						</div>
						<div className="flex space-x-4">
							<div  className=" cursor-pointer flex flex-col items-center">
								{
									isSaved ?
									<IoBookmark data-tooltip-id="save" data-tooltip-content="Unsave" onClick={handlePostSave} size={24} color="#7C4EE4"/>
									// 'saved'
									:
									<IoBookmarkOutline data-tooltip-id="save" data-tooltip-content="Save" onClick={handlePostSave} size={24} color="#7C4EE4"/>

								}
								<Tooltip id="save" place="top" style={{ backgroundColor: 'black', color: 'white' }} />
							</div>
							<div  className=" cursor-pointer flex flex-col items-center">
								<FaShare data-tooltip-id="save" data-tooltip-content="Share"  size={24} color="#7C4EE4"/>
								<Tooltip id="share" place="top" style={{ backgroundColor: 'black', color: 'white' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<PageControls />

			<div className="px-4 ">
				<h1 className="text-2xl">More Posts from {postOnView.author.Fname} </h1>
				<div className="md:grid md:grid-cols-4 md:gap-10">
					{
						authorPosts.map((post) => <Card post={post}  />)
					}
				</div>
			</div>
			<Footer />
		</div>
	)
};

export default PostView;
