import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const BASE_URL = 'http://localhost:3001/api';


function useUserHook() {
	const [ user, setUser ] = useState({});
	const navigate = useNavigate();

	async function login(userData) {
		try {
			const response =  await axios.post(`${BASE_URL}/auth/login`, userData);

			console.log("LOGIN RESPONSE::",response.data);
			setUser(response.data);
			alert('login success')
			localStorage.setItem('user', JSON.stringify(response.data));
			navigate(`/dashboard/${response.data._id}`);

		} catch (error) {
			console.log(error);
			alert('login error')
		}
	}


	async function register(userData) {
		if (userData.cpassword !== userData.password){
			alert('Password Not Matching!')
		} else {
			delete userData.cpassword;
		}

		console.log("REGISTER USER DATA::::",userData)
		try {
			const response = await axios.post(`${BASE_URL}/auth/signin`, userData);

			console.log("REGISTER RESPONSE::",response.data);
			setUser(response.data);
			console.log("STRING:::", JSON.stringify(response.data))
			localStorage.setItem('user', JSON.stringify(response.data));
			alert('register success')
			navigate(`dashboard/${user.id}`);

		} catch(error) {
			console.log(error);
			alert('register error')
		}
	}

	async function userUpdate(id, formData) {
		if (formData.cpassword !== formData.password){
			alert('Password Not Matching!')
		} else {
			delete formData.cpassword;
		}
		try {
			const response = await axios.put(`${BASE_URL}/users/${id}`, formData);

			console.log("UPDATE RESPONSE", response.data);
			localStorage.setItem('user', JSON.stringify(response.data));
			alert('update success');
		} catch (err) {
			console.log(err);
			alert('update error');
		}
	}

	return { login, register, userUpdate }
}


export default useUserHook;
