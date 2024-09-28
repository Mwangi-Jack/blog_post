import { useEffect, useState } from "react";
import UserIndex from "./UserIndex"
import Card from '../../components/UI/Card'
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function SavedPosts() {
	const [ savedPosts, setSavedPosts ] = useState({});
	const [ loading, setLoading ] = useState(true);

	const user = JSON.parse(localStorage.getItem('user'));

	useEffect(() => {
		async function getUserSavedPosts() {
			try {
				const response = await axios.get(`${BASE_URL}/users/${user._id}`);
				console.log(response.data);
				setSavedPosts(response.data.saved);
				setLoading(false);
			} catch(err) {
				console.log(err);
				setLoading(false);
			}
		}
		getUserSavedPosts();
	}, [user])

	return (
		<UserIndex>
			<div className=" mt-10 mx-10 pt-10 gap-16">
				<h1>SAVED POSTS</h1>
				{
					loading ? (
						<div>Loading....</div>
					)
					:
					(
						<div className=" md:grid md:grid-cols-4 md:gap-16">
							{
								savedPosts.map((post) => <Card post={post} />)
							}
						</div>
					)
				}
			</div>
		</UserIndex>
	)
}


export default SavedPosts;
