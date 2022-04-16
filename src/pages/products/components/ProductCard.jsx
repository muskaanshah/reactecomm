import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAlert, useCartWishlist } from "../../../context";
import { addToCart, updateCartQty } from "../../../utils/cartFunctions";
import { discount } from "../../../utils/discountCalculation";

function ProductCard({ product }) {
	const {
		_id,
		url,
		name,
		description,
		newprice,
		actualprice,
		outofstock,
		badge,
	} = product;
	const { cartState, cartDispatch } = useCartWishlist();
	const { alertDispatch } = useAlert();
	const [disabled, setDisabled] = useState(false);
	const token = localStorage.getItem("encodedToken");
	const navigate = useNavigate();
	const location = useLocation();
	const badgeColors = {
		"Best selling": "bg-success-dark",
		"Top 10": "bg-warning",
		"Only few products left": "bg-danger",
		"People's favourite": "bg-tealgreen-light",
	};
	useEffect(() => {
		if (outofstock) {
			setDisabled(true);
		}
	}, [outofstock]);
	const isInWishlist = cartState.wishlist?.find(
		(wishlistProduct) => wishlistProduct._id === _id
	);
	const handleAddTocart = async (e) => {
		e.stopPropagation();
		if (token) {
			const itemFind = cartState.cart.find(
				(currentItem) => currentItem._id === product._id
			);
			if (itemFind) {
				const newCart = await updateCartQty(
					cartState,
					product._id,
					"increment"
				);
				cartDispatch({
					type: "UPDATE_CART_QUANTITY",
					payload: { value: newCart },
				});
			} else {
				const newCart = await addToCart(cartState, product);
				cartDispatch({
					type: "ADD_TO_CART",
					payload: { newCart },
				});
			}
			// alertDispatch({
			// 	type: "ACTIVATE_ALERT",
			// 	payload: { alertType: "success", alertMsg: "Added to cart" },
			// });
		} else navigate("/login", { state: { from: location } });
	};
	return (
		<div
			className="card card-product br-4px"
			onClick={() => navigate(`/product/${_id}`)}
		>
			<div className="card-image-wrapper">
				<img
					className="img-responsive product-objectfit-contain"
					src={url}
					alt="product"
				/>
			</div>
			{badge && (
				<span className={`card-badge ${badgeColors[badge]}`}>{badge}</span>
			)}
			<div className="card-product-details">
				<button
					className={`card-product-favourite ${
						isInWishlist ? "activeButton" : ""
					}
						}`}
					onClick={(e) => {
						e.stopPropagation();
						if (token) {
							if (isInWishlist) {
								cartDispatch({
									type: "REMOVE_FROM_WISHLIST",
									payload: { value: _id },
								});
							} else {
								cartDispatch({
									type: "ADD_TO_WISHLIST",
									payload: { value: _id },
								});
								alertDispatch({
									type: "ACTIVATE_ALERT",
									payload: {
										alertType: "success",
										alertMsg: "Added to wishlist",
									},
								});
							}
						} else {
							navigate("/login", { state: { from: location } });
						}
					}}
				>
					<span className="material-icons"> favorite </span>
				</button>
				<h3 className="card-title">{name}</h3>
				<p className="card-product-description">{description}</p>
				<div className="card-product-price pb-0">
					<span className="card-product-newprice">₹{newprice}</span>
					{actualprice && (
						<span className="card-product-actualprice">₹{actualprice}</span>
					)}
					{actualprice && (
						<span className="card-product-discount">
							{discount(actualprice, newprice)}% off
						</span>
					)}
				</div>
			</div>
			<div className="card-button">
				<button
					className="btn btn-addtocart bg-primary ls-1 px-0-5 py-1 br-4px"
					onClick={handleAddTocart}
					disabled={disabled}
				>
					<span className="btn-addtocart-text">ADD TO CART</span>
					<span className="material-icons-outlined btn-addtocart-icon">
						add_shopping_cart
					</span>
				</button>
			</div>
			{outofstock && (
				<div className="card-outofstock-overlay">
					<p>Out of stock ☹</p>
				</div>
			)}
		</div>
	);
}

export { ProductCard };
