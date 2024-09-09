
function ContactCard({ contact }) {
	return (
		<div className="h-44 w-80 shadow rounded drop-shadow-lg py-6 md:px-2 bg-white">
			<div className="flex justify-center ">
				<div className="border p-2 rounded-full bg-[#7C4EE4] text-white">{contact.icon}</div>
			</div>
			<div className="flex justify-center flex-col items-center mt-4 space-y-2">
				<h1>{contact.name}</h1>
				<p>{contact.contact}</p>
			</div>
		</div>
	);
};

export default ContactCard;
