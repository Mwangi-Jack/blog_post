import { Link, useNavigate } from "react-router-dom";

export function PopMenu() {
	return (
        <div className="md:hidden absolute w-full bg-gray-600 py-2">
          <Link to="/" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/blog" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
            blog
          </Link>
          <Link to="/contact" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
            Contact
          </Link>
          <div className="flex justify-center">
            <Link to='/signup' className="border w-32 text-center px-4 py-1 text-white  rounded">
              Register
            </Link>
          </div>

        </div>
	);
}

export function UserPopMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin');
  }
	return (
    <div className="md:hidden absolute w-full bg-gray-600">
			<Link to='/dashboard/new-post' className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
				<span>New Post</span>
			</Link>
      <Link to="/dashboard/12" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
        Dashboard
      </Link>
      <Link to="/user-posts/12" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
        My Posts
      </Link>
      <Link to="/settings/12" className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
        Settings
      </Link>
      <div onClick={handleLogout} className="block py-2 px-4 text-gray-300 hover:bg-gray-700">
        Logout
      </div>
    </div>
);
}
