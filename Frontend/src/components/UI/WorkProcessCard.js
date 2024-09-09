
function WorkProcessCard({ process, index }) {
	return (
		<div className="text-gray-500 text-md shadow rounded-lg px-4 py-2 space-y-4 hover:bg-[#7C4EE4] hover:text-white">
			<span className="text-5xl font-extrabold text-gray-400">{`0${index}`}</span>
			<h1 className="font-bold font-raleway">{process.title}</h1>
			<p className="font-sans">{process.description}</p>
		</div>
	)
}

export default WorkProcessCard;
