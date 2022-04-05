import { Link } from "react-router-dom";

function LogoutSection({ setOpenLogoutModal }) {
	return (
		<div className="coupons-modal-wrapper">
			<div className="logout-section px-1 bg-white br-4px">
				<p>Are you sure you want to log out?</p>
				<div className="logout-buttons-section my-1">
					<button
						className="btn border-primary py-0-5 br-4px"
						onClick={() => setOpenLogoutModal(false)}
					>
						Cancel
					</button>
					<Link to="/logout" className="btn bg-primary py-0-5 br-4px">
						Logout
					</Link>
				</div>
			</div>
		</div>
	);
}

export { LogoutSection };
