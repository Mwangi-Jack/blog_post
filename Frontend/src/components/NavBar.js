import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMenu5Fill } from "react-icons/ri";

import Button from "./UI/Button";
import PopMenu from "./PopMenu";
import { links } from "../utils/links";

function NavBar() {
	const [open, setIsopen] = useState(false);

	const location = useLocation();

	const toggleMenu = () => {
		setIsopen(!open);
	}

	return (
		<div className="fixed top-0 z-10 bg-white w-full">
			<div className="flex justify-between shadow-md border-black py-1 px-16 items-center">
				<div className="border">
					<img src="/static/images/BlogPost4.png"  alt="Blog Post" className="w-8" />
				</div>
				<div className="hidden md:visible md:flex justify-between items-center w-80">
					{links.map((link) => link.id !== 4 ? (
						<a
							href={link.path}
							className={`${location.pathname === link.path ? 'text-[#7C4EE4]': ''}`}
							>{link.name}</a>
					): null)}
					<FiSearch size={24} className="cursor-pointer" />
					<Button text={'Contact Us'} bg={'#7C4EE4'} />
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
