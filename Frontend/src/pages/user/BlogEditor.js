import React, { useState } from 'react';
import UserIndex from "./UserIndex";
import NewBlogForm from '../../components/Forms/NewBlogForm';
import usePostsHook from '../../hooks/usePostsHook';


function BlogEditor() {
	const { createPost } = usePostsHook();
	const [ content , setContent ] = useState('')
	const [formData, setFormData] = useState({
		'title': '',
		'category': '',
		'tags': '',
		'banner_image': ''
	})

	const user = JSON.parse(localStorage.getItem('user'))

	const handlePublish = (e) => {
		e.preventDefault();
		const blogForm = {
			...formData, ...{'content': content, 'author_id': user._id}}
		console.log(blogForm);
		createPost(blogForm);
	};

	return (
		<UserIndex>
			<div className="mt-16 mx-2">
				<div className='flex justify-between mx-4  mt-20 mb-4'>
					<h2 className="text-2xl font-semibold ">Create a New Blog Post</h2>
					<button
						onClick={handlePublish}
						className="px-4 font-bold bg-[#7C4EE4] text-white rounded-md hover:bg-blue-700"
					>
						Publish
					</button>
				</div>
				<NewBlogForm content={content} setContent={setContent}  formData={formData} setFormData={setFormData} handleSubmit={handlePublish}/>
			</div>
		</UserIndex>
	);
}

export default BlogEditor;
