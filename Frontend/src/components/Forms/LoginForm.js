import React, { useState } from "react";
import { Link } from "react-router-dom";
import FloatingLabelInput from "../UI/FloatingLabelInput";
import AuthAccounts from "../UI/AuthAccounts";
import useUserHook from "../../hooks/useUserHook";

function LoginForm() {
	const [ formData, setFormData ] = useState({
		'email': '',
		'password': '',
	})
	const { login } = useUserHook();

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		login(formData);
	}
	return (
		<div className="">
			<div>
				<FloatingLabelInput
					type="email"
					name='email'
					label={'Email'}
					handleChange={handleChange}
					value={formData.email}
					/>
				<FloatingLabelInput
					type="password"
					name='password'
					label={'password'}
					handleChange={handleChange}
					value={formData.password}
					/>
			</div>
			<div className="flex justify-between my-6">
				<div className="flex space-x-3">
					<input
					type="checkbox"
					/>
					<p>Remember me</p>
				</div>
				<div>
					<Link to='/forgotpassword'>Forgot Password?</Link>
				</div>
			</div>
			<div className="my-4">
				<button className="bg-[#7C4EE4] p-2 rounded text-white w-full" onClick={handleSubmit}>Login</button>
			</div>
			<div className="flex justify-center space-x-2">
				<p>Don't  have an account?</p>
				<Link to={'/signup'} className="text-[#7C4EE4]">Register</Link>
			</div>
			<div className="my-6 flex justify-center items-center space-x-1 md:space-x-2">
				<hr className="w-28 md:w-32 h-[2px]  bg-[#7C4EE4]"/>
				<div><span>Or Signin with</span></div>
				<hr className="w-28 md:w-32  h-[2px]  bg-[#7C4EE4]"/>
			</div>
			<AuthAccounts />
		</div>
	)
}

export default LoginForm;
