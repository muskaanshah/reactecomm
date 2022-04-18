import { Link } from "react-router-dom";
import "./logout.css";

function Logout() {
	localStorage.removeItem("encodedToken");
	localStorage.removeItem("user");
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
			<Link to="/products" className="btn bg-primary color-secondary br-4px">
				View products
			</Link>
		</div>
	);
}

export { Logout };
