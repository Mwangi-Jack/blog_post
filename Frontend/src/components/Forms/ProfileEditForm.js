import React, { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import FloatingLabelInput from '../UI/FloatingLabelInput';
import useUserHook from '../../hooks/useUserHook';

function ProfileEditForm({ user }) {
	const [ formData, setFormData] = useState({
		'Fname': user.Fname,
		'Sname': user.Sname,
		'email': user.email,
		'phone': user.phone
	})

	const { userUpdate } = useUserHook();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({...formData, [name]:value})
	};

	const handlePhoneInput = (value) => {
		setFormData({...formData, "phone": value})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData, user._id);
		userUpdate(user._id, formData);
	};

	return (
		<div className="mt-6 md:mt-0 rounded p-4 border-t shadow-lg basis-3/4">
			<span className="text-2xl font-bold">Edit Profile</span>
			<form onSubmit={handleSubmit} className='space-y-10 mt-10'>
				<div>
					<span className='font-bold text-lg text-gray-500'>Details</span>
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
				</div>

				<div>
					<span className="font-bold text-lg text-gray-500">Password</span>
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
					<div className='mt-10 flex justify-end'>
						<button type='submit' className='border bg-[#7C4EE4] text-white px-4 py-1 font-bold rounded-lg'>Save Changes</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProfileEditForm;
