import { useState, useEffect } from 'react';
import axios from 'axios';
import { handleFail, handleSuccess } from '../components/UI/AlertHandler';

const BASE_URL = process.env.REACT_APP_BASE_URL;

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
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ totalPages, setTotalPages ] = useState(0);
    const [ limit, setLimit ] = useState(8);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function getPosts() {
            try {
                // console.log(`${BASE_URL}/posts?page=${currentPage}&limit=${limit}`)
                const response = await axios.get(`${BASE_URL}/posts?page=${currentPage}&limit=${limit}`);
                // console.log('Response:', response.data.posts);
                setCurrentPage(response.data.currentPage);
                setTotalPages(response.data.totalPages);
                setPosts(response.data.posts);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError(err.message || 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        }

        getPosts();
    }, [currentPage, limit]);

	function getFeaturedPost() {

		const featured = posts.filter(post => post.id === '11')[0];

		// console.log("FEATURED POSTS::::",featured)
		// console.log("ALL POSTS::::",posts[10])
		return featured;
	}

    function getUserPosts(userId) {
        const userposts = posts.filter(post => post.author_id === userId )
        return userposts;
    }

    async function getOnePost(postId) {
        let res;
        // console.log("POST ID:::", postId);
        // console.log(`${BASE_URL}/posts/${postId}`)
        try {
            const response = await axios.get(`${BASE_URL}/posts/${postId}`);
            console.log("ONE POST:::", response.data);
            res = response.data;
        } catch (error) {
            console.log('Error', error);
            res = error.message
        }

        return res;
    }


    async function createPost(blogForm) {
        const data = {
            ...blogForm,
            "created_at": getCurrentDateTime(),
        }
        // console.log("FULL FORM:::", blogForm);
        try {
            const response = await axios.post(`${BASE_URL}/posts`, data)
            console.log(response);
            handleSuccess('Post successfuly created', 'Success')
        } catch (err) {
            handleFail(err.response.data.message)
            console.log(err);
        }
    }

    async function editPost(postId, blogform) {
        // console.log(postId, blogform);
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

    async function likePost(post, action) {
        console.log("WE WANT TO", post)
        let likes = post.likes;
        likes =  action === 'dislike' ? likes - 1 : likes + 1;
        console.log("LIKES::::", likes);
        const likedPost = action === 'dislike' ? {...post, likes: post.likes - 1 } : {...post, likes: +post.likes + 1 }

        console.log("LIKED POST:::", likedPost.likes);
        // try {
        //     const response = await axios.put(`${BASE_URL}/posts/${post._id}`, likedPost);
        //     console.log(response.data);

        // } catch(err) {
        //     console.log("Error while Liking post",err)
        // }
    }


    return {
		posts,
		isLoading,
		error,
        currentPage,
        totalPages,
        getOnePost,
		getFeaturedPost,
        getUserPosts,
        createPost,
        editPost,
        deletePost,
        setCurrentPage,
        setLimit,
        likePost,
	};
}

export default usePostsHook;
