import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function NotfoundPage() {
	return (
		<div>
			<NavBar />
			<div className="mt-16 flex justify-center">
				<div className="px-2 space-y-4 my-4 border rounded-lg md:w-1/3 bg-[#7C4EE4] text-white flex flex-col justify-center items-center h-72" >
					<h1 className="text-8xl font-extrabold">404</h1>
					<span className="text-2xl font-bold">Sorry!</span>
					<p>The link is broken try to refresh or go to home</p>
					<Link  to='/' className="px-4 py-2 bg-white rounded text-[#7C4EE4]">Go To Home</Link>
				</div>
			</div>
			<Footer />
		</div>
	)
};

export default NotfoundPage;
