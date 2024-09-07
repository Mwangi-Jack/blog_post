
function PopMenu() {
	return (
        <div className="md:hidden absolute w-full bg-gray-600">
          <a href="/" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
            Home
          </a>
          <a href="blog" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
            blog
          </a>
          <a href="contact" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
            Contact
          </a>
        </div>
	);
}

export default PopMenu;
