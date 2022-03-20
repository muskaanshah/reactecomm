import { ProductCardHorizontal } from "./components/ProductCardHorizontal";
import "./cart.css";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../../context/cart-wishlist-context";

function Cart() {
	const { state } = useCartWishlist();
	return (
		<div className="container-body py-1 px-2">
			<div className="cartproduct">
				<div className="cart-cartproduct">
					<div className="cartsummary-header">
						<h2 className="mb-0">Your cart</h2>
						<p className="fw-500 m-0 flex-end">
							<span className="material-icons fs-1-25"> location_on </span>
							Delivering to Chennai - 600 010
						</p>
					</div>
					<div className="divider-black"></div>
					<div className="card-cart-product mt-1">
						{state.cart.map((currentProduct) => (
							<ProductCardHorizontal product={currentProduct} />
						))}
					</div>
				</div>
				<div>
					<h2 className="mb-0">
						<span className="fw-500">
							Subtotal ({state.cartItemsNumber} items):{" "}
						</span>{" "}
						Rs. {state.cartPrice}
					</h2>
					<div className="divider-black"></div>
					<Link
						to="/checkout"
						className="btn bg-primary btn-place-order mt-1 fw-600 color-white"
					>
						PROCEED TO CHECKOUT
					</Link>
					<button className="btn bg-secondary btn-place-order mt-1 fw-600">
						SHARE MY CART
					</button>
					<button className="btn bg-grey-light btn-place-order mt-1 fw-600">
						CLEAR MY CART
					</button>
				</div>
			</div>
		</div>
	);
}

export { Cart };
