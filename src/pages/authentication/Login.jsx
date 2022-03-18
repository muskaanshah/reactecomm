import "./authentication.css";
import { Link } from "react-router-dom";

function Login() {
	return (
		<div className="container-body centered">
			<div className="card card-login border-primary borderradius-1 p-2 py-1 mt-2">
				<h2 className="text-align-center">Login</h2>
				<label for="email-address" className="fw-600">
					Email Address
					<span className="input-box">
						<input
							type="input"
							id="email-address"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
							placeholder="Enter your email address"
						/>
					</span>
				</label>
				<label for="password" className="fw-600">
					Password
					<span className="input-box">
						<input
							type="input"
							id="password"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
							placeholder="Enter your password"
						/>
					</span>
				</label>
				<div className="login-space-between mb-1">
					<label for="remember-me" className="fw-500 fs-0-9">
						<input
							id="remember-me"
							type="checkbox"
							name="checkbox"
							value="remember-me"
						/>
						Remember me
					</label>
					<a href="#" className="color-primary fs-0-8">
						Forgot your password?
					</a>
				</div>
				<button className="btn bg-primary fw-500 fs-0-9 mb-1">Login</button>
				<div className="centered">
					<Link to="/signup" className="fw-600 fs-0-9 color-black text-none">
						Create new account
					</Link>
					<span className="material-icons-outlined"> navigate_next </span>
				</div>
			</div>
		</div>
	);
}

export { Login };
