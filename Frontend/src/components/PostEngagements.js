import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiCommentAdd } from "react-icons/bi";
import { IoBookmark } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { FaShare } from "react-icons/fa6";



function PostEngagements({ isLike, isSaved, toggleLike, handlePostSave }) {
	return (
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
	)
};

export default PostEngagements;
