import { Link, useNavigate } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { TbPlaylistAdd } from "react-icons/tb";
import { IoBookmark } from "react-icons/io5";


function SideNav() {
	const navigate = useNavigate()

	const handleLogout = () => {
		navigate('/signin')
	}

	return (
		<div className="fixed hidden  md:flex md: flex-col h-screen px-2 bg-[#7C4EE4] text-white text-center pt-16 space-y-10">
			<div className="absolute top-0 left-0" >
				<img src="/static/images/rsz_newblogpost1.png" className="h-16 px-2 pt-2"  alt="BLOG POST" />
			</div>
			<Link to='/dashboard/new-post' className="flex space-x-1 px-1 border rounded-lg  font-bold">
				<TbPlaylistAdd size={24} />
				<span>New Post</span>
			</Link>
			<div className="flex flex-col items-center space-y-6">
				<Link  to="/dashboard" className=" w-28 flex space-x-1">
					<IoGrid size={24} />
					<span className="text- font-bold">Dashboard</span>
				</Link>
				<Link to="/dashboard/user-posts" className=" w-28 flex space-x-1">
					<MdOutlinePostAdd size={24} />
					<span className="text- font-bold">My Posts</span>
				</Link>
				<Link to="/dashboard/saved-posts" className=" w-28 flex space-x-1">
					<IoBookmark size={24} />
					<span className="text- font-bold">Saved</span>
				</Link>
				<Link to="/dashboard/settings/" className=" w-28 flex space-x-1">
					<BsGearFill size={24} />
					<span className="text- font-bold">Settings</span>
				</Link>
				<div onClick={handleLogout}className="cursor-pointer w-28 flex space-x-1">
					<IoLogOutOutline size={24} />
					<span className="text- font-bold">Logout</span>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
