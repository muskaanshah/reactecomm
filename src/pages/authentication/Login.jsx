import "./authentication.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

function Login() {
	const [emailInput, setEmailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");
	const { loginUser, error } = useAuth();
	return (
		<div className="container-body centered">
			<div className="card card-login border-primary borderradius-1 p-2 py-1 mt-2">
				<h2 className="text-align-center">Login</h2>
				<label htmlFor="email-address" className="fw-600">
					Email Address
					<span className="input-box">
						<input
							type="input"
							id="email-address"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
							placeholder="Enter your email address"
							value={emailInput}
							onChange={(e) => setEmailInput(e.target.value)}
						/>
					</span>
				</label>
				<label htmlFor="password" className="fw-600">
					Password
					<span className="input-box">
						<input
							type="password"
							id="password"
							className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
							placeholder="Enter your password"
							value={passwordInput}
							onChange={(e) => setPasswordInput(e.target.value)}
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
						Remember me
					</label>
					<Link to="/login" className="color-primary fs-0-8">
						Forgot your password?
					</Link>
				</div>
				{error.length > 0 && (
					<div className="fs-0-9 color-danger my-0-5">{error}</div>
				)}
				<button
					className="btn bg-primary fw-500 fs-0-9 mb-1 width-100"
					onClick={() => loginUser(emailInput, passwordInput)}
				>
					Login
				</button>
				<button
					className="btn bg-primary fw-500 fs-0-9 mb-1 width-100"
					onClick={() => {
						setEmailInput("test@gmail.com");
						setPasswordInput("test123");
						loginUser("test@gmail.com", "test123");
					}}
				>
					Login with Test credentials
				</button>
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
