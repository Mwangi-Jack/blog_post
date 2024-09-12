import { Link, useNavigate } from "react-router-dom";
import { IoGrid } from "react-icons/io5";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { TbPlaylistAdd } from "react-icons/tb";


function SideNav() {
	const navigate = useNavigate()

	const handleLogout = () => {
		navigate('/signin')
	}

	return (
		<div className="fixed hidden md:flex md: flex-col r h-screen px-2 bg-[#7C4EE4] text-white text-center pt-10 space-y-10">
			<span>Blog Post</span>
			<Link to='/dashboard/new-post' className="flex space-x-1 px-1 border rounded-lg  font-bold">
				<TbPlaylistAdd size={24} />
				<span>New Post</span>
			</Link>
			<div className="flex flex-col items-center space-y-6">
				<Link  to="/dashboard/12" className=" w-28 flex space-x-1">
					<IoGrid size={24} />
					<span className="text- font-bold">Dashboard</span>
				</Link>
				<Link to="/user-posts/12" className=" w-28 flex space-x-1">
					<MdOutlinePostAdd size={24} />
					<span className="text- font-bold">My Posts</span>
				</Link>
				<Link to="/settings/12" className=" w-28 flex space-x-1">
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
