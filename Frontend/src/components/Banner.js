import Button from "./UI/Button";

function Banner() {
	return (
		<div className="bg-[#7C4EE4] text-white px-6 py-4 md:flex">
			<div className="space-y-4 mb-4 md:flex md:flex-col md:justify-center">
				<span className="text-sm">Featured Post</span>
				<div className="space-y-4">
					<h1 className="font-bold tracking-wider text-5xl">How AI will Change the Future</h1>
					<p>
						The future of AI will see home robots having enhanced intelligence,
						increased capabilities, and becoming more personal and possibly cute.
						For example, home robots will overcome navigation, direction
					</p>
				</div>
				<div>
					<Button text={'Read More'} bg={'#FFFFFF'}/>
				</div>
			</div>
			<img src="/static/images/Container.png" alt="Featured Post" />
		</div>
	)
};

export default Banner;
