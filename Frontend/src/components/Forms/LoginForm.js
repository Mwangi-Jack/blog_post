import React, { useState } from "react";


function LoginForm() {
	const [ formData, setFormData ] = useState({
		'Fname': '',
		'Sname': '',
		'email': '',
		'phone': '',
		'password': '',
	})
	return (
		<div>Login Form</div>
	)
}

export default LoginForm;
