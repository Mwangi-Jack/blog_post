import { useParams } from "react-router-dom";
import UserIndex from "./UserIndex";
import ProfilePreviewCard from "../../components/UI/ProfilePreviewCard";
import ProfileEditForm from "../../components/Forms/ProfileEditForm";

function Settings() {
	const { userId } = useParams();
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<UserIndex>
			<div className="md:flex flex-row mt-16 mx-4 pt-10 gap-16">
				<ProfilePreviewCard user={user} />
				<ProfileEditForm  user={user}/>
			</div>
		</UserIndex>
	);
};

export default Settings;
