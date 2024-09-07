
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


 export const links = [
	{
		'id': 1,
		'name': 'Home',
		'path': '/',
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
		'id': 4,
		'name': 'Contact Us',
		'path': '/contact',
	}
]

export const socials = [
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

