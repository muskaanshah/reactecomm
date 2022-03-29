import { useCartWishlist } from "../../../context/cart-wishlist-context";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { discount } from "../../../utils/discountCalculation";

function ProductCard({
	product: {
		_id,
		url,
		name,
		description,
		newprice,
		actualprice,
		outofstock,
		badge,
	},
}) {
	const { cartState, cartDispatch } = useCartWishlist();
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	const badgeColors = {
		"Best selling": "bg-success-dark",
		"Top 10": "bg-warning",
		"Only few products left": "bg-danger",
		"People's favourite": "bg-tealgreen-light",
	};
	useEffect(() => {
		if (outofstock) {
			setDisabled(() => true);
		}
	}, [outofstock]);
	const isInWishlist = cartState.wishlist.find(
		(wishlistProduct) => wishlistProduct._id === _id
	);
	return (
		<div className="card-product-wrapper borderradius-1">
			<div className="card card-product" onClick={() => navigate("/sp")}>
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
							isInWishlist
								? cartDispatch({
										type: "REMOVE_FROM_WISHLIST",
										payload: { value: _id },
								  })
								: cartDispatch({
										type: "ADD_TO_WISHLIST",
										payload: { value: _id },
								  });
						}}
					>
						<span className="material-icons"> favorite </span>
					</button>
					<h3 className="card-title">{name}</h3>
					<p className="card-product-description">{description}</p>
					<div className="card-product-price pb-0">
						<span className="card-product-newprice">Rs.{newprice}</span>
						{actualprice && (
							<span className="card-product-actualprice">Rs.{actualprice}</span>
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
						className="btn btn-addtocart bg-primary ls-1 px-0-5 py-1"
						onClick={(e) => {
							e.stopPropagation();
							cartDispatch({
								type: "ADD_TO_CART",
								payload: { value: _id },
							});
						}}
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
		</div>
	);
}

export { ProductCard };
