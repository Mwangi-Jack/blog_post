import Button from "./UI/Button";

function Footer() {
	return (
		<div className="">
			<div className="text-white h-90 bg-[#7C4EE4] flex flex-col justify-center items-center w-full">
				<h1 className="text-3xl font-bold">Get Our Stories Delivered From Us To Your Inbox Weekly.</h1>
				<div className="space-x-4">
					<input className="h-10 rounded outline-none px-4" placeholder="Your Email" />
					<Button text={'Get Started'} bg={''} />
				</div>
				<p>
					Get a response tomorrow if you submit
					by 9pm today. If we recieve after 9pm will
					get a response the following day
				</p>
			</div>
			<div>

			</div>
		</div>
	);
}

export default Footer;
