import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import UserIndex from "./UserIndex";
import NewBlogForm from '../../components/Forms/NewBlogForm';
import usePostsHook from '../../hooks/usePostsHook';
import { imageDb } from '../../FirebaseStorage/config';
import { handleFail } from '../../components/UI/AlertHandler';

function BlogEditor() {
	const { createPost, getOnePost, editPost } = usePostsHook();
	const [content, setContent] = useState('');
	const [ file, setFile ]  = useState({})
	const [formData, setFormData] = useState({
		'title': '',
		'category': '',
		'tags': '',
		'banner_url': ''
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

	const handleFileUpload = async (file) => {
		try {
			const imageRef = ref(imageDb, `images/${v4()}`);

			const fileType = Object.keys(file);

			const fileToUpload = file[fileType];
			console.log('File type to upload', fileType);
			console.log('File to upload', fileToUpload);
			const response = await uploadBytes(imageRef, fileToUpload);
			console.log("FILE UPLOAD RESPONSE::", response);

			return response;
		} catch (error) {
			handleFail("Error Uploading File")
		}
	}

	const handlePublish = async (e) => {
		e.preventDefault();
		const resp = await handleFileUpload(file);
		console.log("file upload response",resp);

		getDownloadURL(resp.ref).then(async (url) => {
			formData['banner_url'] = url;
			setFormData({...formData, 'banner_url': url})
		})


		const blogForm = {...formData, ...{'content': content, 'author_id': user._id}}
		console.log("INFOR TO ADD TO FORM DATA:::", blogForm);
		console.log("FULL FORM WITH IMAGE URL FROM FIREBASE::",formData)
		createPost(blogForm)
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
							file={file}
							setFile={setFile}
							formData={editData}
							setFormData={setEditData}
							handleSubmit={handleEdit}

						/>
					) : (
						<NewBlogForm
							content={content}
							setContent={setContent}
							file={file}
							setFile={setFile}
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
