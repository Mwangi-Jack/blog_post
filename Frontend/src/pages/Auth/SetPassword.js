import React, { useState } from 'react';
import FloatingLabelInput from '../../components/UI/FloatingLabelInput';

function SetPassword() {
	const [ formData, setFormData ] = useState({
		'password': '',
		'cpassword': ''
	});

	const handleChange = (e) => {
		const {name, value}  = e.target;
		setFormData({...formData, [name]:value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	}
	return (
		<div className="mx-4">
			<div className="flex justify-between md:mx-20 pt-4">
				<img className="border-2 w-10" src="/static/images/BlogPost1.png" alt="Login" />
			</div>
			<div className="mt-20 md:flex md:justify-between md:mx-10 md:mt-10 ">
				<div className="md:w-1/2 space-y-6 md:px-28 mt-16">
						<div className="">
							<h1 className="text-3xl font-bold">Set a Password</h1>
							<span className="text-sm text-gray-500">
								Your previous password has been reseted. Please set a new password for your account.
							</span>
						</div>
						<div>
							<FloatingLabelInput
								type="password"
								name='password'
								label={'Create Password'}
								handleChange={handleChange}
								value={formData.password}
							/>
							<FloatingLabelInput
								type="password"
								name='cpassword'
								label={'Re-enter Password'}
								handleChange={handleChange}
								value={formData.cpassword}
							/>
						</div>
						<div className="my-4">
							<button className="bg-[#7C4EE4] p-2 rounded text-white w-full" onClick={handleSubmit}>Set Password</button>
						</div>
				</div>
				<div className="h-[33rem] hidden md:flex w-[30rem]" >
					<img className="h-full w-full"  src="/static/images/login.png" alt="LOGIN" />
				</div>
			</div>
		</div>
	)
};

export default SetPassword;
