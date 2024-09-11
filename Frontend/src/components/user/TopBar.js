import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";


function TopBar() {
	const [isOpen, setIsopen ] = useState(false);

	const toggleDropDown = () => {
		setIsopen(!isOpen);
		alert('Toggled!');
	}
	return (
		<div className="fixed w-full flex justify-between items-center pt-1 px-4 bg-white shadow-md">
			<div className="flex flex-col">
				<span className="text-3xl font-bold text-[#7C4EE4]">Dashboard</span>
				<span className="text-xs">Hi Jackson, Welcome back!</span>
			</div>
			<div className="flex space-x-8  items-center">
				<div className="hidden md:flex">
					<input className="h-8 w-56 px-2 border rounded " />
					<div className="absolute top-5 right-36  cursor-pointer"><FaSearch size={25} /></div>
				</div>
				<FaBell color="#7C4EE4" size={24} />
				<div className="flex items-center">
					<FaUserAlt className="text-white bg-[#7C4EE4] border rounded-full p-1"size={30}/>
					<TiArrowSortedDown className="md:hidden" size={20} onClick={toggleDropDown}/>
				</div>
			</div>
		</div>
	)
};

export default TopBar;
