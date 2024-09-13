import { useParams } from "react-router-dom";
import UserIndex from "./UserIndex";
import ProfilePreviewCard from "../../components/UI/ProfilePreviewCard";
import { user } from "../../utils/User";
import ProfileEditForm from "../../components/Forms/ProfileEditForm";

function Settings() {
	const { userId } = useParams();

	return (
		<UserIndex>
			<div className="flex flex-row mt-16 mx-4 pt-10 gap-16">
				<ProfilePreviewCard user={user} />
				<ProfileEditForm />
			</div>
		</UserIndex>
	);
};

export default Settings;
