import { useEffect, useState } from "react";
import axios from "axios";
import usePostsHook from "../hooks/usePostsHook";
import Button from "./UI/Button"

const BASE_URL = process.env.REACT_APP_BASE_URL;


function RecentFeatured() {
	const [ featured, setFeatured ] = useState({});
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		async function fetchFeatured() {
			try {
				const response = await axios.get(`${BASE_URL}/posts/66e594f0a229c1edca3e2b23`);
				console.log("Featured post:::",response.data);
				setFeatured(response.data);
				setLoading(false);
			} catch( err ) {
				console.log('Error while fetching featured post', err)
			}
		}
	fetchFeatured();
	}, []);

    if (loading ) {
        return <p>Loading...</p>;
    }
	return (
		<div className="hidden md:flex space-x-6 ">
		<img src="/static/images/featured.png" className="w-1/2" alt="Featured" />
		<div className="flex flex-col justify-center space-y-8 m-4">
			<div className="space-x-2 text-sm">
				<span className="font-bold">{featured.category}</span>
				<span>{featured.date}</span>
			</div>
			<div className="space-y-6">
				<h1 className="text-2xl font-bold">{featured.title}</h1>
				<p>{featured.content}</p>
				<Button text={'Read More'} bg={'#FFFFFF'} />
			</div>
		</div>
	</div>
	);
};

export default RecentFeatured;
