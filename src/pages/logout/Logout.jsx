import "./logout.css";
import { Link } from "react-router-dom";

function Logout() {
	localStorage.removeItem("encodedToken");
	return (
		<div className="logout">
			<h1>You have been logged out!</h1>
			<img
				src="https://media.giphy.com/media/uWPGqy4rkgllS/giphy.gif"
				width="200"
				frameBorder="0"
				alt="sad-pokemon"
			></img>
			<h2>You can still view the different products though</h2>
			<Link to="/products">
				<button className="btn bg-primary color-secondary">
					View products
				</button>
			</Link>
		</div>
	);
}

export { Logout };
