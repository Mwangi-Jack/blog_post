import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";

import { PopMenu } from "./PopMenu";
import { links } from "../utils/links";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
	const [open, setIsopen] = useState(false);

	const location = useLocation();

	const { isAuthenticated } = useAuth();

	const toggleMenu = () => {
		setIsopen(!open);
	}

	return (
		<div className="fixed top-0 z-10 bg-white w-full">
			<div className="flex justify-between shadow-md border-black py-1 px-10 items-center">
				<div className="">
					<img src="/static/images/rsz_newblogpost.png" className="h-10 w-32"  alt="Blog Post"  />
				</div>
				<div className="hidden md:visible md:flex justify-between items-center w-1/3">
					{links.map((link) => (
						<a
							href={link.path}
							className={`${location.pathname === link.path ? 'text-[#7C4EE4]': ''}`}
							>{link.name}</a>
					))}
					<FiSearch size={24} className="cursor-pointer" />
					{
						isAuthenticated ?
						 <Link className="border px-4 py-1 bg-[#7C4EE4] text-white rounded" to='/dashboard/new-post'>Publish New</Link>
						:
						 <Link className="border px-4 py-1 bg-[#7C4EE4] text-white rounded" to='/signup'>Register</Link>
					}

				</div>
				<div className="md:hidden">
					<RiMenu5Fill onClick={toggleMenu} size={25} />
				</div>
			</div>
			{open && <PopMenu />}
		</div>

	)
}

export default NavBar;
