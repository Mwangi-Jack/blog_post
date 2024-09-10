import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import FloatingLabelInput from "../../components/UI/FloatingLabelInput";
import { useState } from "react";


function CodeVerify() {
	const [ formData, setFormData ] = useState({
		'code': ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({...formData, [name]: value})
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
						<h1 className="text-3xl font-bold">Verify Code</h1>
						<p className="text-sm text-gray-500">
							An Authentication Code has been sent to your email
						</p>
					</div>
					<FloatingLabelInput
						type="text"
						name='code'
						label={'code'}
						handleChange={handleChange}
						value={formData.code}
					/>
					<div>
						<p>Didn’t receive a code? <span className="text-[#7C4EE4]">Resend</span></p>
					</div>
					<div className="my-4">
						<button className="bg-[#7C4EE4] p-2 rounded text-white w-full" onClick={handleSubmit}>Verify</button>
					</div>
				</div>
				<div className="h-[33rem] hidden md:flex w-[30rem]">
					<img className="w-full" src="/static/images/codeverify.png"  alt="Forgot Password"/>
				</div>
			</div>
		</div>
	);
};

export default CodeVerify;
