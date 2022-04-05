import { useCartWishlist } from "../../context/cart-wishlist-context";
import { Link } from "react-router-dom";

import "./ordersummary.css";

function OrderSummary() {
	const { cartState } = useCartWishlist();
	return (
		<div className="container-body centered flex-column">
			<h2 className="mb-0">Order summary</h2>
			<p className="my-0 fw-600">Total amount: ₹{cartState.order.amount}</p>
			<p className="my-0 fw-600">Payment ID: {cartState.order.paymentId}</p>
			<div className="order-items">
				{cartState.order.items.map(
					(item) =>
						item.qty > 0 && (
							<div className="order-item p-1">
								<img src={item.url} alt="product" className="img-responsive" />
								<div>
									<p className="my-0 fw-600">{item.name}</p>
									<p className="my-0">Quantity: {item.qty}</p>
									<p className="my-0">Price: ₹{item.newprice}</p>
								</div>
							</div>
						)
				)}
				<div className="divider-black"></div>
				<h3 className="centered">Thank you for shopping with us</h3>
			</div>
			<Link to="/products" className="btn bg-primary color-secondary">
				Continue shopping
			</Link>
		</div>
	);
}

export { OrderSummary };
