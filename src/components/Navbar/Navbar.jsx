import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import { useState, useEffect } from "react";
import { useProduct } from "../../context/product-context";
import { SearchList } from "../SearchList/SearchList";

function Navbar() {
	const { cartState } = useCartWishlist();
	const { productState, productDispatch } = useProduct();
	const [drawer, setDrawer] = useState(false);
	const token = localStorage.getItem("encodedToken");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname !== "/products") {
			//no filters applied when user shifts page
			productDispatch({
				type: "SEARCH_FILTER_PRODUCT",
				payload: { value: "" },
			});
			productDispatch({
				type: "OPEN_CLOSE_SEARCH_MODAL",
				payload: { value: false },
			});
		}
	}, [location.pathname, productDispatch]);
	return (
		<>
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
									alt="logo"
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
								<Link to="/">About us</Link>
							</li>
							<li className="nav-item" onClick={() => setDrawer(false)}>
								<Link to="/">Contact</Link>
							</li>
						</div>
					</div>
					<li className="search">
						<input
							type="text"
							className="input-text input-text-nav input-search"
							placeholder="Search"
							value={productState.searchText}
							onChange={(e) => {
								productDispatch({
									type: "SEARCH_PRODUCT",
									payload: { value: e.target.value },
								});
								productDispatch({
									type: "OPEN_CLOSE_SEARCH_MODAL",
									payload: { value: true },
								});
							}}
							onKeyPress={(e) => {
								if (e.key === "Enter") {
									productDispatch({
										type: "SEARCH_FILTER_PRODUCT",
										payload: { value: e.target.value },
									});
									navigate("/products");
									productDispatch({
										type: "OPEN_CLOSE_SEARCH_MODAL",
										payload: { value: false },
									});
								}
							}}
						/>
						{productState.searchModal && <SearchList />}
					</li>
					<li className="btn-login">
						{!token ? (
							<>
								<Link to="/login">
									<span className="material-icons user-login-icon">
										account_circle
									</span>
								</Link>
								<Link
									to="/login"
									className="btn user-login-btn borderradius-2 bg-secondary color-primary py-0-5 px-1"
								>
									Login
								</Link>
							</>
						) : (
							<>
								<Link to="/logout">
									<span className="material-icons user-login-icon">logout</span>
								</Link>
								<Link
									to="/logout"
									className="btn user-logout-btn borderradius-2 color-secondary py-0-5 px-1"
								>
									Logout
								</Link>
							</>
						)}
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
		</>
	);
}

export { Navbar };
