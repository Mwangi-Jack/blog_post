import { Link } from "react-router-dom";

import usePostsHook from "../hooks/usePostsHook";
import { useEffect, useState } from "react";
import axios from "axios";


// const BASE_URL = 'http://localhost:3001/api';
const BASE_URL = 'https://blog-post-zhp3.vercel.app/api';



function Featured() {
    // const { posts, isLoading, error } = usePostsHook();
	const [ loading, setLoading ] = useState(true);
	const [ featured, setFeatured ] = useState({});

	// const featured = posts.find(post => post.featured === '66e594f0a229c1edca3e2b23');
	console.log("FEATURED::::", featured);


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
	}, [])

    if (featured === undefined ) {
        return (<p>Loading..!!.</p>);
    }

	return (
		<div className="m-4">
			<div className="rounded shadow-lg md:shadow-none px-2 py-4">
				<img src={featured.banner_url} alt="Virtual Reality" />
				<div className="md:flex md:justify-end">
					<div className="mt-2 md:border md:relative md:bottom-56 md:right-16 md:p-4 md:bg-white md:rounded md:w-1/2">
						<div className="text-sm space-x-2">
							<span className="font-bold">{featured.category}</span>
							<span>{featured.date}</span>
						</div>
						<div className="space-y-4">
							<h1 className="text-2xl font-bold">{featured.title}</h1>
							<p>{featured.content}</p>

							<div>
								<Link className="border rounded px-2 py-1 text-xl font-medium border-[#7C4EE4] text-[#7C4EE4] p-2" to={`/posts/${featured.id}`} >Read More</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Featured;
