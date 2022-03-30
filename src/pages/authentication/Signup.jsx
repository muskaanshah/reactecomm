import "./authentication.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";

function Signup() {
	const [termsCheckbox, setTermsCheckbox] = useState(false);
	const [validation, setValidation] = useState({
		msg: "",
		errorPresent: false,
	});
	const [signupFormInput, setSignUpFormInput] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		reEnteredPassword: "",
	});
	const { signupUser, error } = useAuth();
	const setForm = (field, value) => {
		setSignUpFormInput((prev) => ({ ...prev, [field]: value }));
	};
	const checkPassword = (newPass) => {
		if (signupFormInput.password !== newPass) {
			setValidation((prev) => ({
				...prev,
				msg: "Passwords don't match",
				errorPresent: true,
			}));
		} else setValidation((prev) => ({ ...prev, msg: "", errorPresent: false }));
	};
	const signUpHandler = (e) => {
		e.preventDefault();
		const { firstName, lastName, email, password } = signupFormInput;
		signupUser(firstName, lastName, email, password);
		console.log("signup called");
	};
	return (
		<div className="container-body centered">
			<div className="card card-login border-primary borderradius-1 p-2 py-1 mt-2">
				<h2 className="text-align-center">Signup</h2>
				<form onSubmit={signUpHandler}>
					<label htmlFor="first-name" className="fw-600">
						First Name
						<span className="input-box">
							<input
								type="input"
								id="first-name"
								value={signupFormInput.firstName}
								className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
								placeholder="Enter your first name"
								onChange={(e) => setForm("firstName", e.target.value)}
								required
							/>
						</span>
					</label>
					<label htmlFor="last-name" className="fw-600">
						Last Name
						<span className="input-box">
							<input
								type="input"
								id="last-name"
								value={signupFormInput.lastName}
								className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
								placeholder="Enter your last name"
								onChange={(e) => setForm("lastName", e.target.value)}
								required
							/>
						</span>
					</label>
					<label htmlFor="email-address" className="fw-600">
						Email Address
						<span className="input-box">
							<input
								type="email"
								id="email-address"
								value={signupFormInput.email}
								className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
								placeholder="Enter your email address"
								onChange={(e) => setForm("email", e.target.value)}
								required
							/>
						</span>
					</label>
					<label htmlFor="password" className="fw-600">
						Password
						<span className="input-box">
							<input
								type="password"
								id="password"
								value={signupFormInput.password}
								className="input-text input-authentication p-0-5 fs-0-9 mb-1-5"
								placeholder="Enter your password"
								onChange={(e) => setForm("password", e.target.value)}
								required
							/>
						</span>
					</label>
					<label htmlFor="password-check" className="fw-600">
						Re-enter Password
						<span className="input-box">
							<input
								type="password"
								id="password-check"
								value={signupFormInput.reenteredPassword}
								className="input-text input-authentication p-0-5 fs-0-9"
								placeholder="Re-enter your password"
								onChange={(e) => {
									setForm("reEnteredPassword", e.target.value);
									checkPassword(e.target.value);
								}}
								required
							/>
						</span>
					</label>
					{validation.errorPresent && (
						<div className="fs-0-9 color-danger my-0-5">{validation.msg}</div>
					)}
					<div className="login-space-between mb-1">
						<label htmlFor="remember-me" className="fw-500 fs-0-9">
							<input
								id="remember-me"
								type="checkbox"
								name="checkbox"
								value="remember-me"
								checked={termsCheckbox}
								onChange={() =>
									setTermsCheckbox((termsCheckbox) => !termsCheckbox)
								}
								required
							/>
							I accept all{" "}
							<Link to="/signup" className="color-accent">
								Terms and conditions
							</Link>
						</label>
					</div>
					{error.length > 0 && (
						<div className="fs-0-9 color-danger my-0-5">{error}</div>
					)}
					<input
						type="submit"
						value="Sign up"
						className={`btn fw-500 fs-0-9 mb-1 width-100 ${
							validation.errorPresent ? "btn-disabled" : "bg-primary"
						}`}
						disabled={validation.errorPresent}
					/>
				</form>
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
