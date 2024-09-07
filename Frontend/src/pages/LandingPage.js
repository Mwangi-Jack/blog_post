import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PopularPosts from "../components/PopularPosts";
import RecentPost from "../components/RecentPost";

function LandingPage() {
	return (
		<div>
			<NavBar />
			<div className="mt-12">
				<Banner />
				<Featured />
				<RecentPost />
				<PopularPosts />
				<Footer />
			</div>
		</div>
	)
}


export default LandingPage;
