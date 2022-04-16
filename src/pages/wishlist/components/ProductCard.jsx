import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert, useCartWishlist } from "../../../context";
import { addToCart, updateCartQty } from "../../../utils/cartFunctions";
import { discount } from "../../../utils/discountCalculation";
import { removeFromWishlist } from "../../../utils/wishlistFunctions";

function ProductCard({ product }) {
	const { _id, name, description, newprice, actualprice, url, outofstock } =
		product;
	const { cartState, cartDispatch } = useCartWishlist();
	const { alertDispatch } = useAlert();
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();

	const handleRemoveFromWishlist = async (e) => {
		e.stopPropagation();
		const newCart = await removeFromWishlist(cartState, _id);
		cartDispatch({
			type: "REMOVE_FROM_WISHLIST",
			payload: { value: newCart },
		});
	};
	const itemFind = cartState.cart.find(
		(currentItem) => currentItem._id === product._id
	);

	const handleAddToCart = async (e) => {
		e.stopPropagation();
		const newCart = await removeFromWishlist(cartState, _id);
		cartDispatch({
			type: "REMOVE_FROM_WISHLIST",
			payload: { value: newCart },
		});
		if (itemFind) {
			const newCart2 = await updateCartQty(newCart, product._id, "increment");
			cartDispatch({
				type: "UPDATE_CART_QUANTITY",
				payload: { value: newCart2 },
			});
		} else {
			const newCart2 = await addToCart(newCart, product);
			cartDispatch({
				type: "ADD_TO_CART",
				payload: { value: newCart2 },
			});
		}
		alertDispatch({
			type: "ACTIVATE_ALERT",
			payload: { alertType: "success", alertMsg: "Added to cart" },
		});
	};

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
			<button className="btn-close" onClick={handleRemoveFromWishlist}>
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
					onClick={handleAddToCart}
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
