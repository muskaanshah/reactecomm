import { useCartWishlist } from "../../../context/cart-wishlist-context";
import { discount } from "../../../utils/discountCalculation";

function ProductCardHorizontal({
	product: {
		_id,
		name,
		description,
		newprice,
		actualprice,
		url,
		qty,
		deliveryDays,
	},
}) {
	const { cartDispatch } = useCartWishlist();
	const getDeliveryDate = (deliveryDays) => {
		const someDate = new Date();
		const result = someDate.setDate(someDate.getDate() + deliveryDays);
		return `${new Date(result).getDate()}/${
			new Date(result).getMonth() + 1
		}/${new Date(result).getFullYear()}`;
	};
	return (
		<>
			<div className="card-horizontal">
				<div className="card-image-wrapper">
					<img className="img-responsive cart-objectfit-cover" src={url} />
				</div>
				<div className="card-product-details">
					<button
						className="btn-close"
						onClick={() =>
							cartDispatch({
								type: "OPEN_MODAL",
								payload: { value: _id },
							})
						}
					>
						<span className="material-icons close-button"> close </span>
					</button>
					<h3 className="card-title">{name}</h3>
					<p className="card-product-description">{description}</p>
					<div className="card-product-price">
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
					<div className="card-product-quantity">
						<span className="product-qty mr-0-5">Qty:</span>
						<button
							className="borderradius-2 btn-count border-accent bg-secondary"
							onClick={() =>
								cartDispatch({
									type: "REMOVE_FROM_CART",
									payload: { value: _id },
								})
							}
						>
							-
						</button>
						<span className="mx-0-5">{qty}</span>
						<button
							className="borderradius-2 btn-count border-accent bg-secondary"
							onClick={() =>
								cartDispatch({
									type: "ADD_TO_CART",
									payload: { value: _id },
								})
							}
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
