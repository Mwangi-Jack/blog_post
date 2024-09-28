import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { handleSuccess, handleFail, handleInfor } from '../components/UI/AlertHandler';
import { useAuth } from '../contexts/AuthContext';


const BASE_URL = process.env.REACT_APP_BASE_URL;

function useUserHook() {
	const [ user, setUser ] = useState({});
	const [ userLoading , setuserLoading] = useState(true);
	const navigate = useNavigate();
	const { setIsAuthenticated } = useAuth();

	async function login(userData) {
		try {
			const response =  await axios.post(`${BASE_URL}/auth/login`, userData);

			console.log("LOGIN RESPONSE::",response.data);
			setUser(response.data);
			handleSuccess("Login Succcess")
			localStorage.setItem('user', JSON.stringify(response.data));
			setIsAuthenticated(true);
			navigate(`/dashboard/${response.data._id}`);

		} catch (error) {
			console.log(error.response.data.message);
			handleFail(error.response.data.message)
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
			handleSuccess();
			setIsAuthenticated(true);
			navigate(`dashboard/${user.id}`);

		} catch(error) {
			console.log(error);
			handleFail("Confirm Your Credentials")
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
			handleSuccess('Profile Updated Successfully');
		} catch (err) {
			console.log(err);
			handleFail(err.response.data.message);
		}
	}

	async function savePost(postId) {
		const user = JSON.parse(localStorage.getItem('user'));
		if (!user) return handleInfor("Create Account Or Loggin to Save Post")

		console.log("USER:::", user);
		if(user.saved.includes(postId)) {
			console.log('Unsaving...')
			user.saved = user.saved.filter(id => id !== postId)
		} else {
			console.log('Saving....')
			user.saved.push(postId);
		}

		localStorage.setItem('user', JSON.stringify(user));
		try {
			const response = await axios.put(`${BASE_URL}/users/${user._id}`, user)
			console.log("SAVE RESPONSE::", response.data);
			handleSuccess('Post Saved Successfully');
		} catch (err) {
			console.log('Error Saving Post', err);
			handleFail(err.response.data)
		}
	}

	async function getUser(userId) {
		try {
			const response = await axios.get(`${BASE_URL}/users/${userId}`);
			return response.data
		} catch (err) {
			console.log(err)
			return 'err'
		}
	}

	return { login, register, userUpdate, savePost, getUser, userLoading }
}


export default useUserHook;
