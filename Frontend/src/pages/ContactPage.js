import Footer from "../components/Footer";
import ContactForm from "../components/Forms/ContactForm";
import NavBar from "../components/NavBar";
import ContactCard from "../components/UI/ContactCard";
import { info } from "../utils/ContactInfo";

function ContactPage() {
	return (
		<div className="mt-16 bg-[#FAFAFA]">
			<NavBar />
			<div>
				<div className="text-center">
					<h1 className="text-2xl font-bold">Get In Touch</h1>
					<p>
						Contact us to publish your content and show ads
						to our website and get a good reach.
					</p>
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0 my-6">
					{info.map((contact) => <ContactCard contact={contact} />)}
				</div>
				<div>
					<div className="flex justify-center">
						<img  className="w-full md:w-3/4 h-96" src='/static/images/map.png' alt='Google Map' />
					</div>
				</div>
				<div className="flex justify-center">
					<ContactForm />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactPage;
