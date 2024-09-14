import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function usePostsHook() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('useEffect ran');

        async function getPosts() {
            console.log('Fetching posts...');

            try {
                const response = await axios.get(`${BASE_URL}/posts`);
                console.log('Response:', response.data);
                setPosts(response.data);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError(err.message || 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        }

        getPosts();
    }, []);

	function getFeaturedPost() {

		const featured = posts.filter(post => post.id === '11')[0];

		console.log("FEATURED POSTS::::",featured)
		console.log("ALL POSTS::::",posts[10])
		return featured;
	}

    return {
		posts,
		isLoading,
		error,
		getFeaturedPost
	};
}

export default usePostsHook;
