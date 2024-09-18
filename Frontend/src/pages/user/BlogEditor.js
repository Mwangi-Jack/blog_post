import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import UserIndex from "./UserIndex";
import NewBlogForm from '../../components/Forms/NewBlogForm';
import usePostsHook from '../../hooks/usePostsHook';

function BlogEditor() {
	const { createPost, getOnePost, editPost } = usePostsHook();
	const [content, setContent] = useState('');
	const [formData, setFormData] = useState({
		'title': '',
		'category': '',
		'tags': '',
		'banner_image': ''
	});
	const [editData, setEditData] = useState({});

	const location = useLocation();
	const { pathname } = location;
	const { postId } = useParams();

	const isEditPage = pathname.includes('edit');

	useEffect(() => {
		if (isEditPage && postId) {
			const post = getOnePost(postId);
			if (post) {
				setEditData(post);
				setContent(post.content);
			}
		}
	}, []);

	const user = JSON.parse(localStorage.getItem('user'));

	const handlePublish = (e) => {
		e.preventDefault();
		const blogForm = {
			...formData,
			...{
				'content': content,
				'author_id': user._id
			}
		};
		createPost(blogForm);
	};

	const handleEdit = (e) => {
		e.preventDefault();
		console.log(editData);
		editPost(postId, editData)
	}

	return (
		<UserIndex>
			<div className="mt-16 mx-2">
				<div className='flex justify-between mx-4 mt-20 mb-4'>
					{
						isEditPage ? (
							<h2 className="text-2xl font-semibold">Edit Post {editData.category}</h2>
						) : (
							<h2 className="text-2xl font-semibold">Create a New Blog Post</h2>
						)
					}
					<button
						onClick={isEditPage ? handleEdit : handlePublish}
						className="px-4 font-bold bg-[#7C4EE4] text-white rounded-md hover:bg-blue-700"
					>
						Publish
					</button>
				</div>
				{
					isEditPage ? (
						<NewBlogForm
							content={content}
							setContent={setContent}
							formData={editData}
							setFormData={setEditData}
							handleSubmit={handleEdit}
						/>
					) : (
						<NewBlogForm
							content={content}
							setContent={setContent}
							formData={formData}
							setFormData={setFormData}
							handleSubmit={handlePublish}
						/>
					)
				}
			</div>
		</UserIndex>
	);
}

export default BlogEditor;
