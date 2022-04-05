import { useState } from "react";
import { AddressSection } from "./components/AddressSection";
import { LogoutSection } from "./components/LogoutSection";
import { ProfileSection } from "./components/ProfileSection";
import "./userprofile.css";

function UserProfile() {
	const [activeButton, setActiveButton] = useState("Profile");
	return (
		<div className="container-body user-page-wrapper centered">
			<div className="profile-card">
				<div className="profile-name centered">
					<img
						class="avatar avatar-sm borderradius-full"
						src="https://i.ibb.co/YWTbNKm/Deepika-Padukone-1200-PTI-0.jpg"
						alt="avatar"
					/>
					<p className="fw-500 fs-1-25">Adarsh Balika</p>
				</div>
				<div className="profile-buttons">
					<button
						className={`btn display-block ${
							activeButton === "Profile" && "bg-primary"
						}`}
						onClick={() => setActiveButton("Profile")}
					>
						Profile
					</button>
					<button
						className={`btn display-block ${
							activeButton === "Address" && "bg-primary"
						}`}
						onClick={() => setActiveButton("Address")}
					>
						Addresses
					</button>
					<button
						className={`btn display-block ${
							activeButton === "Logout" && "bg-primary"
						}`}
						onClick={() => setActiveButton("Logout")}
					>
						Logout
					</button>
				</div>
				{activeButton === "Profile" && <ProfileSection />}
				{activeButton === "Address" && <AddressSection />}
				{activeButton === "Logout" && (
					<LogoutSection setActiveButton={setActiveButton} />
				)}
			</div>
		</div>
	);
}

export { UserProfile };
