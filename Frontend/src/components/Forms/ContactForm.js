import { useState } from "react";
import Button from "../UI/Button";

function ContactForm() {
	const [formData, setFormData] =useState({
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({...formData, [name]: value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	}

	return (
		<div className=" p-4 shadow my-4 border space-y-4 bg-white">
			<div className="md:flex md:space-x-4">
				<div className="flex flex-col space-y-1">
					<label for='name'>Name</label>
					<input
						className='border rounded h-8 p-2'
						type="text"
						name="name"
						onChange={(e)=> handleChange(e)}
						id="name"
						required
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label for='phone'>Phone</label>
					<input
						className='border rounded h-8 p-2'
						type="phone"
						name="phone"
						onChange={(e)=> handleChange(e)}
						id="phone"
						required
					/>
				</div>
			</div>
			<div className="md:flex md:space-x-4">
				<div className="flex flex-col space-y-1">
					<label for='email'>Email</label>
					<input
						className='border rounded h-8 p-2'
						type="email"
						name="email"
						onChange={(e)=> handleChange(e)}
						id="email"
						required
					/>
				</div>
				<div className="flex flex-col space-y-1">
					<label for='subject' >Subject</label>
					<input
						className='border rounded h-8 p-2'
						type="text"
						name="subject"
						onChange={(e)=> handleChange(e)}
						id="subject"
						required
					/>
				</div>
			</div>
			<div className="flex flex-col space-y-1">
				<label for='message'>Message</label>
				<textarea
					name="message"
					id="message"
					onChange={(e)=> handleChange(e)}
					className="h-28 md:h-56 border rounded p-2"
					required
				/>
			</div>
			<div className="flex justify-end">
				<button
					className="text-xl text-white font-semibold border rounded bg-[#7C4EE4] px-4 "
					onClick={handleSubmit}
					>Submit</button>
			</div>
		</div>
	)
}

export default ContactForm;
