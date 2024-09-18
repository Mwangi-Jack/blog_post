import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { handleConfirm, handleFail, handleSuccess } from '../components/UI/AlertHandler';

// const BASE_URL = 'http://localhost:3001/api';
const BASE_URL = 'https://blog-post-zhp3.vercel.app/api';

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

    function getOnePost(postId) {
        const post = posts.find(post => post._id === postId)
        console.log(posts)
        return post;
    }

    async function createPost(blogForm) {
        const data = {
            ...blogForm,
            "created_at": getCurrentDateTime(),
        }

        try {
            const response = await axios.post(`${BASE_URL}/posts`, data)
            console.log(response);
            alert('post successfuly created');
            handleSuccess('Post successfuly created', 'Success')
        } catch (err) {
            handleFail(err.response.data.message)
            console.log(err);
        }
    }

    async function editPost(postId, blogform) {
        console.log(postId, blogform);
        try {
            const response = await axios.put(`${BASE_URL}/posts/${postId}`, blogform);
            console.log(response);
            alert('post updated successfully')
            handleSuccess('Post updated Successfully')
        } catch(err) {
            console.log('Error while edditing', err);
            handleFail(err.message.data.message)
        }
    }

    async function deletePost(postId) {
        try {
            const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
            console.log(response)
            handleSuccess("Your post has been deleted.")
        } catch(err) {
            console.log(err);
            handleFail(err.response.data.message);
        }
    }



    return {
		posts,
		isLoading,
		error,
        getOnePost,
		getFeaturedPost,
        getUserPosts,
        createPost,
        editPost,
        deletePost,
	};
}

export default usePostsHook;
