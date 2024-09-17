import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import FloatingLabelInput from "../UI/FloatingLabelInput";
import { Link } from "react-router-dom";
import AuthAccounts from "../UI/AuthAccounts";
import useUserHook from "../../hooks/useUserHook";


function SignupForm() {
	const [ formData, setFormData ] = useState({
		'Fname': '',
		'Sname': '',
		'email': '',
		'phone': null,
		'password': '',
		'cpassword': '',
		'profile_url': ''
	});

	const { register } = useUserHook();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({...formData, [name]:value})
	};

	const handlePhoneInput = (value) => {
		setFormData({...formData, "phone": value})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		register(formData);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="md:flex md:space-x-4">
					<FloatingLabelInput
						type="text"
						name='Fname'
						label={'First Name'}
						handleChange={handleChange}
						value={formData.Fname}
						/>
					<FloatingLabelInput
						type="text"
						name='Sname'
						label={'Second Name'}
						handleChange={handleChange}
						value={formData.Sname}
						/>
				</div>
				<div className="md:flex md:space-x-4">
					<FloatingLabelInput
						type="email"
						name='email'
						label={'Email'}
						handleChange={handleChange}
						value={formData.email}
						/>
						<PhoneInput
							className='h-[40px] mt-4'
							country={'ke'}
							value={formData.phone}
							name={"phone"}
							onChange={handlePhoneInput}
							inputStyle={{
							width: '100%',
							border: '1px solid #ccc',
							borderRadius: '4px',
							height:'100%',
							outline: 'none'
							}}
							inputProps={{required: true}}
							containerStyle={{ width: '100%' }}
						/>

				</div>
				<div className="md:flex md:space-x-4">
					<FloatingLabelInput
						type="password"
						name='password'
						label={'Password'}
						handleChange={handleChange}
						value={formData.password}
						/>
					<FloatingLabelInput
						type="password"
						name='cpassword'
						label={'Confirm Password'}
						handleChange={handleChange}
						value={formData.cpassword}
						/>
				</div>
				<div className="flex space-x-2">
					<input
					type="checkbox"
					/>
					<p className="space-x-1">
						<span>I agree to the</span>
						<Link to={'/terms'} className="text-[#7C4EE4]">Terms</Link>
						<span>and</span>
						<Link to={'/policies'} className="text-[#7C4EE4]" >Policies</Link>
					</p>
				</div>
				<div className="my-4">
					<button type="submit" onClick={handleSubmit} className="bg-[#7C4EE4] p-2 rounded text-white w-full">Create Account</button>
				</div>
			</form>
			<div className="flex justify-center space-x-2">
				<p>Already have an account?</p>
				<Link to={'/signin'} className="text-[#7C4EE4]">Login</Link>
			</div>
			<div className="my-6 flex justify-center items-center md:mx-16 space-x-1 md:space-x-2">
				<hr className="w-28 md:w-44 h-[2px]  bg-[#7C4EE4]"/>
				<div><span>Or Signup with</span></div>
				<hr className="w-28 md:w-44  h-[2px]  bg-[#7C4EE4]"/>
			</div>
			<AuthAccounts />
		</div>
	)
}

export default SignupForm;
