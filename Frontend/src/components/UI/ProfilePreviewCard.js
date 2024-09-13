import { useState } from "react";
import ThemeToggle from "./ThemeToggle";


function ProfilePreviewCard({user}) {
	const [theme, setTheme] = useState('dark');

	return (
		<div className="space-y-10 basis-1/4">
			<div className="flex flex-col items-center  space-y-2 border-t shadow  py-2">
				<div className="w-20 h-20 rounded-full flex justify-center items-center">
					{
						user.profile_url ? <img className="rounded-full w-full h-full" src={`${user.profile_url}`} alt="Profile-photo" /> :
						<img className=""src='/static/images/no-profile.png' alt="Profile-photo" />
					}
				</div>
				<span className="text-sm font-bold">{user.Fname}</span>
				<span className="text-[10px]">{user.email}</span>
			</div>
			<div className="border-t space-y-4 px-2 py-10 rounded shadow">
				<div className="space-y-4 ">
					<span className="text-xl font-bold text-gray-500">Information</span>
					<div>
						<p><span className="font-bold">Name :</span> <span>{user.Fname} {user.Sname}</span></p>
						<p><span className="font-bold">Email :</span> <span>{user.email}</span></p>
						<p><span className="font-bold">Phone :</span> <span>{user.phone} </span></p>
					</div>
				</div>
				<div className="space-y-4">
					<span className="text-xl font-bold text-gray-500">Preferences</span>
					<div>
						<div className="flex space-x-3">
							<span>Theme </span>
							<ThemeToggle />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePreviewCard;
