import { useState } from "react";
import { AddressSection } from "./components/AddressSection";
import { LogoutSection } from "./components/LogoutSection";
import { ProfileSection } from "./components/ProfileSection";
import "./userprofile.css";

function UserProfile() {
	const [activeButton, setActiveButton] = useState("Profile");
	const [openLogoutModal, setOpenLogoutModal] = useState(false);
	return (
		<div className="container-body user-page-wrapper centered">
			<div className="profile-card">
				<div className="profile centered px-1">
					<div className="profile-name">
						<img
							class="avatar avatar-sm borderradius-full"
							src="https://i.ibb.co/YWTbNKm/Deepika-Padukone-1200-PTI-0.jpg"
							alt="avatar"
						/>
						<p className="fw-500 fs-1-25">Adarsh Balika</p>
					</div>
					<button
						className="btn bg-primary br-4px p-0 px-0-5"
						onClick={() => setOpenLogoutModal(true)}
					>
						Logout
					</button>
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
				</div>
				{activeButton === "Profile" && <ProfileSection />}
				{activeButton === "Address" && <AddressSection />}
				{openLogoutModal && (
					<LogoutSection setOpenLogoutModal={setOpenLogoutModal} />
				)}
			</div>
		</div>
	);
}

export { UserProfile };
