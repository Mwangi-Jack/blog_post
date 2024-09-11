import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";

function StatsCard({stat}) {
	return (
		<div className="rounded-lg shadow-lg px-4 py-2 flex md:flex-col justify-between">
			<h1 className="text-4xl font-bold">{stat.total}</h1>
			<div className="flex items-center justify-between space-x-2 md:w-44 mt-2">
				<span className="text-sm text-gray-500">{stat.name}</span>
				<span className={`flex items-center  space-x-2 rounded px-1 ${stat.trend > 0 ? 'bg-green-300 text-green-700' : 'bg-red-300 text-red-500'}`}>
					{stat.trend > 0 ? <HiTrendingUp /> : <HiTrendingDown />}
					<span>{stat.trend}</span>
				</span>
			</div>
		</div>
	);
};

export default StatsCard;
