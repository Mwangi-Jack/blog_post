import { useState } from 'react';
import usePostsHook from "../hooks/usePostsHook";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Card from "../components/UI/Card";
import PageControls from "../components/UI/PageControls";
import Loading from "../components/Loading";
import Filter from '../components/UI/Filter'
import { PostCategories } from '../utils/PostCategories';


function BlogsPage() {
	const { posts, isLoading, currentPage, setCurrentPage, totalPages } = usePostsHook();
	const [categories, setCategories] = useState(PostCategories);

	const handleCheck = (id) => {
		setCategories((prevCategories) =>
			prevCategories.map((category) =>
				category.id === id ? {...category, isCheck: !category.isCheck} : category))
	}

	return (
		<div className="mt-20">
			<NavBar />
			<div>
				<div className="flex flex-col items-center">
					<span className="text-sm">OUR BlOGS</span>
					<h1 className="text-3xl font-bold">Find All Our Blogs Here</h1>
					<p className="p-4 md:w-1/3 text-xs text-center">
						our blogs are written from very research research
						and well known writers writers so that  we can provide
						you the best blogs and articles articles for you to read
						them all along
					</p>
				</div>
				<Filter categories={categories} handleCheck={handleCheck} />
				<div>
					{
						isLoading ? <Loading /> :
						<div className="mx-4 my-10 md:grid md:grid-cols-4 md:gap-12">
							{posts.map((post)=> <Card post={post} key={post._id}/>)}
						</div>
					}
				</div>
			</div>
			<PageControls currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
			<Footer />
		</div>
	)
};

export default BlogsPage;
