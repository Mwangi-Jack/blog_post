import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import WorkProcessCard from "../components/UI/WorkProcessCard";
import WorkProcess from "../utils/WorkProcess";

function AboutPage() {
	return (
		<div>
			<NavBar />
			<div className="mt-28 mx-4">
				<div className="flex flex-col items-center">
					<span className="text-sm">ABOUT US</span>
					<h1 className="text-3xl font-bold text-center">Creative Blog Writting and publishing site</h1>
					<p className="p-4 md:w-1/3 text-xs text-center">
						Leverage agile frameworks to provide a robust synopsis for high level overviews.
						Iterative approaches to corporate strategy foster collaborative thinking to
						further the overall value proposition. Organically grow the holistic world view
						of disruptive innovation via workplace diversity and empowerment.
					</p>
				</div>
				<div className=" space-y-6">
					<div className="flex flex-col items-center md:px-4 my-20">
						<img src="/static/images/about.png" className="w-full h-56 md:h-[608px]" alt="Employees" />
					</div>
					<div className="mt-10">
						<div className="md:mx-10 space-y-10">
							<span className="text-sm text-gray-700">HOW WE WORK</span>
							<div className="space-y-2 md:flex md:items-center md:justify-between">
								<h1 className="text-5xl font-bold md:w-1/2">I Will Show You How Our Team Works</h1>
								<p className="text-gray-500 font-sans md:w-1/3 md:h-28 md:flex md:items-end ">Bring to the table win-win market strategies to ensure perfect articles.</p>
							</div>
						</div>

						<div className="space-y-10 my-16 md:space-y-0 md:mx-20 md:grid grid-cols-3 gap-16">
							{ WorkProcess.map((process, index) => <WorkProcessCard process={process}  index={index + 1}/>) }
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
};

export default AboutPage;
