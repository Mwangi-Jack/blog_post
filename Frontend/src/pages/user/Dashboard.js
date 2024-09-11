import { useParams } from "react-router-dom";
import UserIndex from "./UserIndex";
import { Stats } from "../../utils/Stats";
import StatsCard from "../../components/user/StatsCard";
import ViewershipChart from "../../components/user/ViewershipChart";
import PopularUserPostsView from "../../components/user/PopularUserPosts";


function Dashboard() {
	const { userId } = useParams();

	return (
		<UserIndex>
			<div className="mt-20">
				<div className="mx-4 space-y-6 md:space-y-0 md:mx-10 md:flex md:justify-around my-6">
					{Stats.map((stat) => <StatsCard stat={stat} />)}
				</div>
				<ViewershipChart />
				<PopularUserPostsView />
			</div>
		</UserIndex>
	)
}

export default Dashboard;
