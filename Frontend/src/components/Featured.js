import Button from "./UI/Button";

function Featured() {
	return (
		<div className="m-4">
			<div className="rounded shadow-lg md:shadow-none px-2 py-4">
				<img src="/static/images/featured.png" alt="Virtual Reality" />
				<div className="md:flex md:justify-end">
					<div className="mt-2 md:border md:relative md:bottom-56 md:right-16 md:p-4 md:bg-white md:rounded md:w-1/2">
						<div className="text-sm space-x-2">
							<span className="font-bold">Development</span>
							<span>16th March 2024</span>
						</div>
						<div className="space-y-4">
							<h1 className="text-2xl font-bold">How to make a Game look more attractive
								with New VR & AI Technology
							</h1>
							<p>
								Google has been investing in AI for many years and
								bringing its benefits to individuals, businesses and
								communities. Whether it’s publishing state-of-the`everyone.
							</p>

							<Button text={'Read More'} bg={'#FFFFFF'} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Featured;
