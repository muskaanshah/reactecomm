import "./navbar.css";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import { useState } from "react";
import { useProduct } from "../../context/product-context";

function Navbar() {
	const { cartState } = useCartWishlist();
	const { productDispatch } = useProduct();
	const [drawer, setDrawer] = useState(false);
	return (
		<div>
			<ul className="nav bg-primary px-1">
				<div className="section1">
					<div className="hamburger-menu">
						<button
							className="btn-hamburger-menu"
							onClick={() => setDrawer((prev) => !prev)}
						>
							<span className="material-icons-outlined"> menu </span>
						</button>
					</div>
					<li className="nav-logo" onClick={() => setDrawer(false)}>
						<Link to="/">
							<img
								className="nav-logo-img"
								src="https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541606/e-commerce/dice-logo_sbyevn.png"
							/>
						</Link>
					</li>
					<div className={`drawer ${drawer && `drawer-open`}`}>
						<li className="nav-item" onClick={() => setDrawer(false)}>
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item" onClick={() => setDrawer(false)}>
							<Link to="/products">Products</Link>
						</li>
						<li className="nav-item" onClick={() => setDrawer(false)}>
							<a href="#">About us</a>
						</li>
						<li className="nav-item" onClick={() => setDrawer(false)}>
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
						<span className="material-icons user-login-icon">
							account_circle{" "}
						</span>
					</a>
					<Link
						to="/login"
						className="btn user-login-btn borderradius-2 bg-secondary color-primary py-0-5 px-1"
						href="/pages/login.html"
					>
						Login
					</Link>
				</li>
				<li>
					<Link to="/wishlist">
						<span className="material-icons-outlined wishlist-icon">
							favorite_border
						</span>
					</Link>
				</li>
				<li>
					<span className="badge-container">
						<Link to="/cart">
							<span className="material-icons-outlined cart-icon">
								shopping_cart
							</span>
						</Link>
						{cartState.cartItemsNumber > 0 && (
							<div className="badge badge-number bg-danger color-white">
								{cartState.cartItemsNumber}
							</div>
						)}
					</span>
				</li>
			</ul>
		</div>
	);
}

export { Navbar };
