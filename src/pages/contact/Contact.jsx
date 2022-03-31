import { useState } from "react";
import "./contact.css";

function Contact() {
	const [email, setEmail] = useState("");
	return (
		<div className="contact-body">
			<div className="brown-overlay">
				<h1 className="fs-3">Reach us</h1>
				<div className="flex-column" style={{ gap: "2rem" }}>
					<div className="contact-single">
						<span className="material-icons-outlined">location_on</span>
						<p className="my-0 fs-1-25">
							2nd Floor, SCM Jamaldeen Chambers
							<br />
							#4 Montieth Road, Egmore
							<br />
							600 008
						</p>
					</div>
					<div className="contact-single">
						<span className="material-icons-outlined">call</span>
						<p className="my-0 fs-1-25">+91 90000 00012</p>
					</div>
					<div className="contact-single">
						<span className="material-icons-outlined">schedule</span>
						<p className="my-0 fs-1-25">Everyday: 11:00 am - 10:00 pm</p>
					</div>
					<h3 className="my-0">
						Subscribe to be the first to know about our website launch
					</h3>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							setEmail("");
						}}
					>
						<div className="contact-single">
							<input
								type="email"
								placeholder="Enter your email here"
								value={email}
								className="input-text input-subscribe"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<input
								type="submit"
								value="Subscribe"
								className="btn bg-secondary color-primary fw-500"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export { Contact };
