import { useNavigate } from "react-router-dom";
import { useCartWishlist } from "../../../context";
import { removeFromCart, updateCartQty } from "../../../utils/cartFunctions";
import { discount } from "../../../utils/discountCalculation";
import { getDeliveryDate } from "../../../utils/getDeliveryDate";

function ProductCardHorizontal({ product }) {
	const {
		_id,
		name,
		description,
		newprice,
		actualprice,
		url,
		qty,
		deliveryDays,
	} = product;
	const { cartState, cartDispatch } = useCartWishlist();
	const navigate = useNavigate();
	const decrementQtyHandler = async (e) => {
		e.stopPropagation();
		if (product.qty === 1) {
			const newCart = await removeFromCart(cartState, product._id);
			cartDispatch({
				type: "REMOVE_FROM_CART",
				payload: { value: newCart },
			});
		} else {
			const newCart = await updateCartQty(cartState, product._id, "decrement");
			cartDispatch({
				type: "UPDATE_CART_QUANTITY",
				payload: { value: newCart },
			});
		}
	};
	const incrementQtyHandler = async (e) => {
		e.stopPropagation();
		const newCart = await updateCartQty(cartState, product._id, "increment");
		cartDispatch({
			type: "UPDATE_CART_QUANTITY",
			payload: { value: newCart },
		});
	};
	return (
		<>
			<div
				className="card-horizontal br-4px"
				onClick={() => navigate(`/product/${_id}`)}
			>
				<div className="card-image-wrapper centered">
					<img
						className="img-responsive product-objectfit-contain"
						src={url}
						alt="product"
					/>
				</div>
				<div className="card-product-details">
					<button
						className="btn-close"
						onClick={(e) => {
							e.stopPropagation();
							cartDispatch({
								type: "OPEN_MODAL",
								payload: { value: _id },
							});
						}}
					>
						<span className="material-icons close-button"> close </span>
					</button>
					<h3 className="card-title">{name}</h3>
					<p className="card-product-description">{description}</p>
					<div className="card-product-price">
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
					<div className="card-product-quantity">
						<span className="product-qty mr-0-5">Qty:</span>
						<button
							className="borderradius-2 btn-count border-accent bg-secondary"
							onClick={decrementQtyHandler}
						>
							-
						</button>
						<span className="mx-0-5">{qty}</span>
						<button
							className="borderradius-2 btn-count border-accent bg-secondary"
							onClick={incrementQtyHandler}
						>
							+
						</button>
					</div>
					<p className="fs-0-9 pl-1 flex-end">
						<span className="material-icons color-success-dark fs-1">
							task_alt
						</span>
						Delivery by {getDeliveryDate(deliveryDays)}
					</p>
				</div>
			</div>
		</>
	);
}

export { ProductCardHorizontal };
