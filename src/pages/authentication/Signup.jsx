import "./authentication.css";
import { Link } from "react-router-dom";

function Signup() {
	return (
		<div className="container-body centered">
			<div className="card card-login border-primary borderradius-1 p-2 py-1 mt-2">
				<h2 className="text-align-center">Signup</h2>
				<label htmlFor="full-name" className="fw-600">
					Full Name
					<span className="input-box">
						<input
							type="input"
							id="full-name"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
							placeholder="Enter your full name"
						/>
					</span>
				</label>
				<label htmlFor="email-address" className="fw-600">
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
				<label htmlFor="password" className="fw-600">
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
				<label htmlFor="password-check" className="fw-600">
					Re-enter Password
					<span className="input-box">
						<input
							type="input"
							id="password-check"
							className="input-text input-authentication p-0-5 fs-0-9"
							placeholder="Re-enter your password"
						/>
					</span>
				</label>
				<div className="login-space-between mb-1">
					<label htmlFor="remember-me" className="fw-500 fs-0-9">
						<input
							id="remember-me"
							type="checkbox"
							name="checkbox"
							value="remember-me"
						/>
						I accept all
						<Link to="/signup" className="color-accent">
							Terms and conditions
						</Link>
					</label>
				</div>
				<button className="btn bg-primary fw-500 fs-0-9 mb-1">Sign up</button>
				<div className="centered">
					<Link to="/login" className="fw-600 fs-0-9 color-black text-none">
						Already have an account
					</Link>
					<span className="material-icons-outlined"> navigate_next </span>
				</div>
			</div>
		</div>
	);
}

export { Signup };
