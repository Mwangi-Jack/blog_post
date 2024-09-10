import React, { useState } from "react";
import { Link } from "react-router-dom";
import FloatingLabelInput from "../UI/FloatingLabelInput";

function LoginForm() {
	const [ formData, setFormData ] = useState({
		'email': '',
		'password': '',
	})

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
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
			<div className="my-6 flex justify-center items-center md:mx-16 space-x-1 md:space-x-2">
				<hr className="w-28 md:w-44 h-[2px]  bg-[#7C4EE4]"/>
				<div><span>Or Signup with</span></div>
				<hr className="w-28 md:w-44  h-[2px]  bg-[#7C4EE4]"/>
			</div>
			<div className="flex justify-center space-x-10 my-10">
				<div className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
					<img src="/static/images/fb.png" alt="Facebook" />
				</div>
				<div className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
					<img src="/static/images/google.png" alt="Google" />
				</div>
				<div className="border w-16 h-8 flex justify-center py-1 rounded cursor-pointer border-[#7C4EE4]">
					<img src="/static/images/mac.png" alt="Mac" />
				</div>
			</div>
		</div>
	)
}

export default LoginForm;
