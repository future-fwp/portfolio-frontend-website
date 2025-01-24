import { Contact } from "../../libs/data";
import "./styled/Footer.css";
const Footer = () => {
	return (
		<footer
			id="footer"
			className="max-w-[1200px] md:px-8 px-6 lg:px-10 lg:py-10 md:py-8 py-6 flex flex-col gap-3 mx-auto"
		>
			<h2>Contact me</h2>
			<ul>
				{Contact.map((contact) => {
					return (
						<div className="icon-footer flex gap-2 mt-2">
							{contact.iconFooter}
							<span
								dangerouslySetInnerHTML={{
									__html: contact.textFooter,
								}}
							></span>
						</div>
					);
				})}
			</ul>
			<form
				action=""
				className="grid md:grid-cols-2"
			>
				<div className="flex flex-col">
					<label htmlFor="name">name</label>
					<input
						type="text"
						name="name"
						placeholder="Enter a name"
						className="outline-none p-2 w-[300px] text-black"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="email">email</label>
					<input
						type="email"
						name="email"
						className="w-[300px] outline-none p-2 text-black"
						placeholder="Enter an email...."
					/>
				</div>
				<div className="md:col-span-2 flex flex-col ">
					<label htmlFor="feedback">Leave me a comment</label>
					<textarea
						className="w-full min-[500px]:w-[500px] resize-y outline-none p-2 text-black"
						name="feedback"
						placeholder="Enter a feedback"
					/>
				</div>
			</form>
		</footer>
	);
};

export default Footer;
