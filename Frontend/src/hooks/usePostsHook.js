import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api';

function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Add 1 since months are zero-indexed
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}



function usePostsHook() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getPosts() {
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

    function getUserPosts(userId) {
        const userposts = posts.filter(post => post.author_id === userId )
        return userposts;
    }

    async function createPost(blogForm) {
        const data = {
            ...blogForm,
            "created_at": getCurrentDateTime(),
        }

        console.log("FULL FORM:::", data);
        try {
            const response = await axios.post(`${BASE_URL}/posts`, data)
            console.log(response);
            alert('post successfuly created');
        } catch (err) {
            alert('an error occured while creating post')
            console.log(err);
        }
    }

    return {
		posts,
		isLoading,
		error,
		getFeaturedPost,
        getUserPosts,
        createPost
	};
}

export default usePostsHook;
