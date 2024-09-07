import RecentFeatured from "./RecentFeatured";
import Button from "./UI/Button";
import Card from "./UI/Card";

const recentPosts = [
	{
		'id': 1,
		'pic': '/static/images/travel1.png',
		'category': 'Travel',
		'date': '13th March 2024',
		'title': '8 Rules Of Travelling In Sea You Need To Know',
		'text': 'Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: you can ship large volumes at costs '
	},
	{
		'id': '2',
		'pic': '/static/images/development1.png',
		'category': 'Development',
		'date': '11th March 2024',
		'title': 'How to Build strong portfolio and get a Job in UI/UX',
		'text': 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from '
	},
	{
		'id': '3',
		'pic': '/static/images/sports1.png',
		'category': 'Sports',
		'date': '10th March 2024',
		'title': 'How to Be a Professional Footballer in 2024',
		'text': 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive'
	}
]

function RecentPost() {
	return (
		<div className="mx-4 my-10 md:-mt-44 md:mx-20">
			<div className="flex justify-between  p-1">
				<h1 className="font-bold text-3xl">Our Recent Post</h1>
				<Button text={'View All'} bg={'#7C4EE4'} />
			</div>
			<div className="mt-4 ">
				<RecentFeatured />
				<div className="mt-4 md:grid md:grid-cols-3 md:gap-16">
					{ recentPosts.map((post) => (
						<Card post={post} />
					))}
				</div>
			</div>
		</div>
	);
}

export default RecentPost;
