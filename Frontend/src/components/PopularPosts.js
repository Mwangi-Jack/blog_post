import Button from "./UI/Button"
import Card from "./UI/Card"

const popularPosts = [
	{
		'id': 1,
		'pic': '/static/images/travel2.png',
		'category': 'Travel',
		'date': '13th March 2024',
		'title': 'Train Or Bus Journey? Which One Suits?',
		'text': 'The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person '
	},
	{
		'id': 2,
		'pic': '/static/images/development2.png',
		'category': 'Development',
		'date': '11th March 2024',
		'title': 'Best Website To Research For Your Next Project',
		'text': 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs '
	},
	{
		'id': 3,
		'pic': '/static/images/sports2.png',
		'category': 'Sports',
		'date': '10th March 2024',
		'title': 'How to Be a Dancer in 2024 With Proper Skills',
		'text': 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive '
	},
	{
		'id': 4,
		'pic': '/static/images/travel3.png',
		'category': 'Travel',
		'date': '13th March 2024',
		'title': 'Who is the Best Singer on Chart? Know him?',
		'text': 'chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and '
	},
	{
		'id': 5,
		'pic': '/static/images/development3.png',
		'category': 'Development',
		'date': '11th March 2024',
		'title': 'How to Start Export Import Business From Home',
		'text': 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs'
	},
	{
		'id': 6,
		'pic': '/static/images/sports3.png',
		'category': 'Sports',
		'date': '10th March 2024',
		'title': 'Make Some Drinks Wich Chocolates and Milk',
		'text': 'Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. survival strategies to ensure proactive'
	}
]

function PopularPosts() {
	return (
		<div className="mx-4 my-10 md:mx-20">
			<div className="flex justify-between  p-1">
				<h1 className="font-bold text-3xl">Popular Posts</h1>
				<Button text={'View All'} bg={'#7C4EE4'} />
			</div>
			<div className="md:grid md:grid-cols-3 md:gap-16">
				{popularPosts.map((post) => (
					<Card post={post} />
				))}
			</div>
		</div>
	)
}

export default PopularPosts;
