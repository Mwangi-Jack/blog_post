import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import LoginForm from "../../components/Forms/LoginForm";


function Login() {
	return (
		<div className="mx-4">
			<div className="flex justify-between md:mx-20 pt-4">
				<img className="border-2 w-10" src="/static/images/BlogPost1.png" alt="Login" />
				<Link to='/' className="flex items-center space-x-2 text-[#7C4EE4]">
					<HiHome size={25}/>
					<span className="font-semibold mt-2">Home</span>
				</Link>
			</div>
			<div className="mt-20 md:flex md:justify-between md:mx-10 md:mt-10 ">
				<div className="md:w-1/2 space-y-6 md:px-28">
						<div className="">
							<h1 className="text-3xl font-bold">Sign up</h1>
							<span className="text-sm text-gray-500">Welcom Back! Login access your  account</span>
						</div>
						<LoginForm />
				</div>
				<div className="h-[33rem] hidden md:flex w-[30rem]" >
					<img className="h-full w-full"  src="/static/images/login.png" alt="LOGIN" />
				</div>
			</div>
		</div>
	)
}

export default Login;
