import { useAuth } from "../../../context";

function ProfileSection() {
	const { user } = useAuth();
	return (
		<div className="profile-section px-1">
			<h3 className="mb-0">Details</h3>
			<p className="my-0">{`Name: ${user.firstName} ${user.lastName}`}</p>
			<p className="my-0">Email: {user.email}</p>
			<p className="my-0">Contact: {user.mobile}</p>
			<span className="color-primary text-underline fw-500 fs-0-9 my-1 display-inlineblock">
				Change password
			</span>
		</div>
	);
}

export { ProfileSection };
