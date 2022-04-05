import { Link } from "react-router-dom";

function LogoutSection({ setActiveButton }) {
	return (
		<div className="logout-section px-1">
			<p>Are you sure you want to log out?</p>
			<div className="logout-buttons-section my-1">
				<Link to="/logout" className="btn border-primary py-0-5 br-4px">
					Logout
				</Link>
				<button
					className="btn bg-primary py-0-5 br-4px"
					onClick={() => setActiveButton("Profile")}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}

export { LogoutSection };
