import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<ul className="nav bg-primary px-1">
				<div className="section1">
					<div className="hamburger-menu">
						<button className="btn-hamburger-menu">
							<span className="material-icons-outlined"> menu </span>
						</button>
					</div>
					<li className="nav-logo">
					<Link to="/">
							<img className="nav-logo-img" alt="logo" src="https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541606/e-commerce/dice-logo_sbyevn.png" />
					</Link>
					</li>
					<div className="drawer" data-visible="false">
						<li className="nav-item">
						<Link to="/">Home</Link>
						</li>
						<li className="nav-item">
							<a href="/pages/products.html">Games</a>
						</li>
						<li className="nav-item">
							<a href="#">About us</a>
						</li>
						<li className="nav-item">
							<a href="#">Contact</a>
						</li>
					</div>
				</div>
				<li className="search">
					<input
						type="text"
						className="input-text input-text-nav input-search"
						placeholder="Search"
					/>
				</li>
				<li className="btn-login">
					<a href="/pages/login.html">
						<span className="material-icons user-login-icon"> account_circle </span>
					</a>
					<a
						className="btn user-login-btn borderradius-2 bg-secondary color-primary py-0-5 px-1"
						href="/pages/login.html"
					>
						Login
					</a>
				</li>
				<li>
					<a href="/pages/wishlist.html">
						<span className="material-icons-outlined wishlist-icon">
							favorite_border
						</span>
					</a>
				</li>
				<li>
					<span className="badge-container">
						<a href="/pages/cart.html">
							<span className="material-icons-outlined cart-icon">
								shopping_cart
							</span>
						</a>
						<div className="badge badge-number bg-danger color-white">17</div>
					</span>
				</li>
			</ul>
		</div>
	);
}

export {Navbar}
