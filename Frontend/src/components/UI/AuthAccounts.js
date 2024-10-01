import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginSocialGoogle } from 'reactjs-social-login'


// const REDIRECT_URI = "http://localhost:3000/dashboard"

function AuthAccounts() {
	const navigate = useNavigate();

	const handleResolve = async ({ provider, data }) => {
		console.log(provider, data)
		try{
			const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/google-login`, data)
			console.log(response.data);
			localStorage.setItem('user', JSON.stringify(response.data));
			navigate(`/dashboard/${response.data._id}`);
		} catch (err) {
			console.log("Erro on Google Login:", err)
		}
	}

	const handleReject = (err) => {
		console.log(err);
	}

	return (
		<div className="flex justify-center space-x-10 my-10">
			<div onClick={()=>alert("Signin with Facebook")} className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
				<img src="/static/images/fb.png" alt="Facebook" />
			</div>
			<LoginSocialGoogle
				client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID}
				scope="openid profile email"
				discoveryDocs="claims_supported"
				access_type="offline"
				// redirect_uri={REDIRECT_URI}
				onResolve={handleResolve}

				onReject={handleReject}

				>
				<div className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
					<img src="/static/images/google.png" alt="Google" />
				</div>
			</LoginSocialGoogle>
			<div onClick={()=>alert("Signin with Mac")} className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
				<img src="/static/images/mac.png" alt="Mac" />
			</div>
		</div>
	);
}

export default AuthAccounts;
