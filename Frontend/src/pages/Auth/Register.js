import { HiHome } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SignupForm from "../../components/Forms/SignupForm";

function Register() {
	return (
		<div className="mx-4">
			<div className="flex justify-between md:mx-20 pt-4">
				<Link to='/' className="w-screen flex items-center space-x-2 text-[#7C4EE4]">
					<HiHome size={25}/>
					<span className="font-semibold mt-2">Home</span>
				</Link>
				<img className="border-2 w-10" src='/static/images/BlogPost1.png'  alt="BlOG POST LOGO" />
			</div>
			<div className="md:flex md:justify-between md:mx-10 mt-10">
				<div className="h-[33rem] hidden md:flex w-[30rem]" >
					<img className="h-full w-full"  src="/static/images/register.png" alt="Register" />
				</div>
				<div className="md:w-1/2">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold">Sign up</h1>
						<span className="text-sm text-gray-500">Lets get you setup so you can access your personal account</span>
					</div>
					<SignupForm />
				</div>
			</div>
		</div>
	)
}

export default Register;
