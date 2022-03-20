import { useCartWishlist } from "../../../context/cart-wishlist-context";

function ProductCardHorizontal({
	product: { _id, name, description, newprice, actualprice, url, qty },
}) {
	const { dispatch } = useCartWishlist();
	let discount = Math.floor(((actualprice - newprice) * 100) / actualprice);
	return (
		<div className="card-horizontal">
			<div className="card-image-wrapper">
				<img className="img-responsive cart-objectfit-cover" src={url} />
			</div>
			<div className="card-product-details">
				<button className="btn-close">
					<span className="material-icons close-button"> close </span>
				</button>
				<h3 className="card-title">{name}</h3>
				<p className="card-product-description">{description}</p>
				<div className="card-product-price">
					<span className="card-product-newprice">Rs.{newprice}</span>
					<span className="card-product-actualprice">Rs.{actualprice}</span>
					<span className="card-product-discount">{discount}% off</span>
				</div>
				<div className="card-product-quantity">
					<span className="product-qty mr-0-5">Qty:</span>
					<button
						className="borderradius-2 btn-count border-accent bg-secondary"
						//   onClick={() => removeFromCart(id)}
					>
						-
					</button>
					<span className="mx-0-5">{qty}</span>
					<button
						className="borderradius-2 btn-count border-accent bg-secondary"
						onClick={(e) => dispatch({ type: "ADD_TO_CART", payload: _id })}
					>
						+
					</button>
				</div>
				<p className="fs-0-8 pl-1 flex-end">
					<span className="material-icons color-success-dark fs-1">
						task_alt
					</span>
					Delivery by *date*
				</p>
			</div>
		</div>
	);
}

export { ProductCardHorizontal };
