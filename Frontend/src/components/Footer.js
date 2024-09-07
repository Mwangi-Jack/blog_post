import Button from "./UI/Button";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


const links = [
	{
		'id': 1,
		'name': 'Home',
		'path': '/home',
	},
	{
		'id': 2,
		'name': 'Blog',
		'path': '/blog',
	},
	{
		'id': 3,
		'name': 'About',
		'path': '/about',
	},
	{
		'id': 1,
		'name': 'Contact Us',
		'path': '/contact',
	}
]

const socials = [
	{
		"id": 1,
		'name': 'Facebook',
		'icon': <FaFacebook  size={25} />
	},
	{
		"id": 2,
		'name': 'LinkedIn',
		'icon': <FaLinkedin  size={25} />
	},
	{
		"id": 3,
		'name': 'Instagram',
		'icon': <FaSquareInstagram  size={25} />
	},
	{
		"id": 4,
		'name': 'Twitter',
		'icon': <FaXTwitter  size={25} />
	}
]

function Footer() {
	return (
		<div className="">
			<div className="text-white h-90 bg-[#7C4EE4] flex flex-col justify-center items-center w-full h-72 space-y-4 px-2">
				<h1 className="text-lg md:text-4xl font-bold md:w-1/2 text-center">Get Our Stories Delivered From Us To Your Inbox Weekly.</h1>
				<div className="space-x-4">
					<input className="h-10 rounded outline-none px-4 text-gray-500" placeholder="Your Email" />
					<Button text={'Get Started'} bg={'#FFF'} />
				</div>
				<p className="md:w-1/4 text-xs text-center">
					Get a response tomorrow if you submit
					by 9pm today. If we recieve after 9pm will
					get a response the following day
				</p>
			</div>
			<div className="text-center mt-4 space-y-4 mb-2">
				<div>
					<img src="/static/images/BlogPost1" alt="BLOG POST LOGO" />
				</div>
				<div className="space-x-4">
					{links.map((link) => (
						<a href={link.path} >{link.name}</a>
					))}
				</div>
				<div className="flex justify-center space-x-4">
					{socials.map((social) => (
						<span>{social.icon}</span>
					))}
				</div>
				<div>
					&copy; Blog Post 2024
				</div>
			</div>
		</div>
	);
}

export default Footer;
