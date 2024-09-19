import { useState  } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import Editor from "../user/Editor";
import Prompter from '../../Gemini/Prompter';


function NewBlogForm({
	file, setFile, content,
	setContent, formData,
	setFormData,
	handleSubmit
}) {

	let [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]:value})
	}
	const handleGenerateText = async () =>{
		if(formData.title === '') return alert('Enter Blog Title');
		setLoading(true);
		const AIcontent = await Prompter(formData.title);
		setContent(AIcontent);
		setLoading(false)
	}



	return (
		<form onSubmit={handleSubmit} className="space-y-4 mx-3">
			<div className='md:flex  md:space-x-5 '>
				<div>
					<div className='space-y-6 basis-1/4'>
						<div className="flex flex-col w-full space-y-1">
							<label className='text-gray-600' htmlFor="title">Title</label>
							<input
								value={formData.title}
								onChange={(e) => handleChange(e)}
								className="py-1 border rounded px-2 "
								name="title"
								placeholder="write your blog title..."
							/>
						</div>
						<div className="md:flex flex-col w-full space-y-1">
							<label className='text-gray-600' htmlFor="banner">Banner Image</label>
							<input
								onChange={(e) => setFile({image: e.target.files[0]})}
								className="border py-1 rounded-sm px-2"
								type="file"
								accept="image/*"
								name="banner_image"
								id="banner-image"
							/>
						</div>
						<div className="flex flex-col w-full space-y-1">
							<label className='  text-gray-600' htmlFor="category">Category</label>
							<input
								value={formData.category}
								onChange={(e) => handleChange(e)}
								className="py-1 border rounded-sm px-2"
								type="text"
								name="category"
								placeholder="enter blog category..."
							/>
						</div>
						<div className="flex flex-col w-full space-y-1">
							<label className='  text-gray-600' htmlFor="slug">Tags</label>
							<input
								value={formData.tags}
								onChange={(e) => handleChange(e)}
								className="py-1 border rounded-sm px-2"
								type="text"
								name="tags"
								placeholder="enter blog slug..."
							/>
						</div>
					</div>


					<div className='space-y-5 flex justify-center mt-12'>
						<span
							onClick={handleGenerateText}
							className="cursor-pointer px-4 w-[10rem] flex justify-center  border-[#7C4EE4] border  rounded-md hover:bg-gray-100"
						>
							{loading ?
							(
								<div className="sweet-loading">
									<PulseLoader
										color={"#7C4EE4"}
										loading={loading}
										size={10}
										aria-label="Loading Spinner"
										data-testid="loader"
									/>
								</div>
							) : "Generate with AI"}
						</span>
					</div>
				</div>
				<div className='basis-3/4'>
					<Editor  content={content} setContent={setContent}/>
				</div>
			</div>
	  </form>
	);
}

export default NewBlogForm;




































// {/* <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
// {/* Title */}
// <div className="sm:col-span-2">
//   <label
// 	htmlFor="title"
// 	className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
//   >
// 	Blog Title
//   </label>
//   <div className="mt-2">
// 	<input
// 	  onChange={(e)=> handleChange(e)}
// 	  type="text"
// 	  value={formData.title}
// 	  name="title"
// 	  id="title"
// 	  autoComplete="given-name"
// 	  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
// 	  placeholder="Type the Blog title"
// 	/>
//   </div>
// </div>
// {/* Slug */}
// <div className="sm:col-span-2">
//   <label
// 	htmlFor="slug"
// 	className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
//   >
// 	Blog Slug
//   </label>
//   <div className="mt-2">
// 	<input
// 	  onChange={(e)=> handleChange(e)}
// 	  type="text"
// 	  value={formData.slug}
// 	  name="slug"
// 	  id="slug"
// 	  autoComplete="slug"
// 	  className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
// 	  placeholder="Type the blog title"
// 	/>
//   </div>
// </div>
// {/* Description */}
// <div className="sm:col-span-2">
//   <label
// 	htmlFor="description"
// 	className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//   >
// 	Blog Description
//   </label>
//   <textarea
// 	id="description"
// 	rows="4"
// 	name='description'
// 	onChange={(e)=> handleChange(e)}
// 	value={formData.description}
// 	className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
// 	placeholder="Write your thoughts here..."
//   ></textarea>
// </div>
// {/* Content */}
// <div className="sm:col-span-2">
//   <label
// 	htmlFor="content"
// 	className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//   >
// 	Blog Content
//   </label>
//   <Editor content={formData.content} handleChange={handleChange}/>

// </div>
// </div> */}
