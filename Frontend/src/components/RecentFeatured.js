import Button from "./UI/Button"

function RecentFeatured() {
	return (
		<div className="hidden md:flex space-x-6 ">
		<img src="/static/images/featured.png" className="w-1/2" alt="Featured" />
		<div className="flex flex-col justify-center space-y-8 m-4">
			<div className="space-x-2 text-sm">
				<span className="font-bold">Development</span>
				<span>16th March 2024</span>
			</div>
			<div className="space-y-6">
				<h1 className="text-2xl font-bold">How to make a Game look more attractive with
					New VR & AI Technology
				</h1>
				<p>
					Google has been investing in AI for many years and bringing
					 its benefits to individuals, businesses and communities.
					  Whether it’s publishing state-of-the-art research, building
					   helpful products or developing tools and resources that enable
						others, we’re committed to making AI accessible to everyone.
				</p>
				<Button text={'Read More'} bg={'#FFFFFF'} />
			</div>
		</div>
	</div>
	);
};

export default RecentFeatured;
