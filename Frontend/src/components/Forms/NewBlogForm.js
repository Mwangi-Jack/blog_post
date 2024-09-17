import Editor from "../user/Editor";

function NewBlogForm({content, setContent, formData, setFormData, handleSubmit}) {
	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]:value})
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4 mx-3">
			<div className="space-y-4 md:space-y-0 md:flex w-full justify-between md:space-x-16">
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
					<lable className='text-gray-600' htmlFor="banner">Banner Image</lable>
					<input
						value={formData.banner_image}
						onChange={(e) => handleChange(e)}
						className="border py-1 rounded-sm px-2"
						type="file"
						accept="image/*"
						name="banner_image"
						id="banner-image"
					/>
				</div>
			</div>
			<div className="space-y-4 md:space-y-0 md:flex w-full justify-between md:space-x-16">
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
			<Editor  content={content} setContent={setContent}/>

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
