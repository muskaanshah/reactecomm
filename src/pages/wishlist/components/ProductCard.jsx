import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert, useCartWishlist } from "../../../context";
import { discount } from "../../../utils/discountCalculation";

function ProductCard({ product }) {
	const { _id, name, description, newprice, actualprice, url, outofstock } =
		product;
	const { cartDispatch } = useCartWishlist();
	const { alertDispatch } = useAlert();
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (outofstock) {
			setDisabled(true);
		}
	}, [outofstock]);
	return (
		<div
			className="card card-product br-4px"
			onClick={() => navigate(`/product/${_id}`)}
		>
			<button
				className="btn-close"
				onClick={(e) => {
					e.stopPropagation();
					cartDispatch({
						type: "REMOVE_FROM_WISHLIST",
						payload: { value: _id },
					});
				}}
			>
				<span className="material-icons"> close </span>
			</button>
			<div className="card-image-wrapper">
				<img
					className="img-responsive product-objectfit-contain"
					src={url}
					alt="product"
				/>
			</div>
			<div className="card-product-details">
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
					onClick={(e) => {
						e.stopPropagation();
						cartDispatch({
							type: "ADD_TO_CART",
							payload: { value: product },
						});
						cartDispatch({
							type: "REMOVE_FROM_WISHLIST",
							payload: { value: _id },
						});
						alertDispatch({
							type: "ACTIVATE_ALERT",
							payload: { alertType: "success", alertMsg: "Added to cart" },
						});
					}}
					disabled={disabled}
				>
					<span className="btn-addtocart-text">MOVE TO CART</span>
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
