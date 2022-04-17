import { Link } from "react-router-dom";
import { notfound } from "../../assets";
import "../../index.css";

function PageNotFound() {
	return (
		<div className="container-body centered flex-column">
			<img src={notfound} alt="404error" className="img-pagenotfound" />
			<h2 className="color-danger">404 error: Page not found</h2>
			<Link to="/" className="btn bg-primary color-white">
				Go to Home
			</Link>
		</div>
	);
}

export { PageNotFound };
