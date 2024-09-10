import { useState } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import FloatingLabelInput from "../../components/UI/FloatingLabelInput";
import AuthAccounts from "../../components/UI/AuthAccounts";

function ForgotPassword() {
	const [formData, setFormData]  = useState({
		'email': ''
	})

	const handleChange = (e) => {
		const {name, value}  = e.target;
		setFormData({...formData, [name]: value })
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<div className="mx-8">
			<div>
				<img className="h-10" src="/static/images/BlogPost1.png" alt="BLOG POST" />
			</div>
			<div className="md:flex md:justify-between md:mx-10 mt-10">
				<div className="md:w-1/2 space-y-6 md:px-28 md:pt-20 ">
					<Link to='/signin' className="flex items-center">
						<MdKeyboardArrowLeft size={25} />
						<p>Back to login</p>
					</Link>
					<div className="space-y-4">
						<h1 className="text-3xl font-bold">Forgot your password?</h1>
						<p className="text-sm text-gray-500">
							Don't worry, happens to all of us. Enter your email
							below to recover your password.
						</p>
					</div>
					<FloatingLabelInput
						type="email"
						name='email'
						label={'email'}
						handleChange={handleChange}
						value={formData.email}
					/>
					<div className="my-4">
						<button className="bg-[#7C4EE4] p-2 rounded text-white w-full" onClick={handleSubmit}>Submit</button>
					</div>
					<div className="my-6 flex justify-center items-center space-x-1 md:space-x-2">
						<hr className="w-28 md:w-32 h-[2px]  bg-[#7C4EE4]"/>
						<div><span>Or Signup with</span></div>
						<hr className="w-28 md:w-32  h-[2px]  bg-[#7C4EE4]"/>
					</div>
					<AuthAccounts />
				</div>
				<div className="h-[33rem] hidden md:flex w-[30rem]">
					<img className="w-full" src="/static/images/forgotpassword.png"  alt="Forgot Password"/>
				</div>
			</div>
		</div>
	);
}

export default ForgotPassword;
