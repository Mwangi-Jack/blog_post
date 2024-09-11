import SideNav from "../../components/user/SideNav"
import TopBar from "../../components/user/TopBar"

function UserIndex({ children }) {
	return (
		<div className="flex">
			<SideNav />
			<div className="md:ml-32 w-full h-screen">
				<TopBar />
				{children}
			</div>
		</div>
	)
}

export  default UserIndex
