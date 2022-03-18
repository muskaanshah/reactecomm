import { ProductCardHorizontal } from "./components/ProductCardHorizontal";
import "./cart.css";
import { Link } from "react-router-dom";

function Cart() {
	return (
		<div class="container-body py-1 px-2">
			<div class="cartproduct">
				<div class="cart-cartproduct">
					<div class="cartsummary-header">
						<h2 class="mb-0">Your cart</h2>
						<p class="fw-500 m-0 flex-end">
							<span class="material-icons fs-1-25"> location_on </span>
							Delivering to Chennai - 600 010
						</p>
					</div>
					<div class="divider-black"></div>
					<div class="card-cart-product mt-1">
						<ProductCardHorizontal />
						<ProductCardHorizontal />
					</div>
				</div>
				<div>
					<h2 class="mb-0">
						<span class="fw-500">Subtotal (2 Items): </span> Rs. 1798
					</h2>
					<div class="divider-black"></div>
					<Link
						to="/checkout"
						class="btn bg-primary btn-place-order mt-1 fw-600 color-white"
					>
						PROCEED TO CHECKOUT
					</Link>
					<button class="btn bg-secondary btn-place-order mt-1 fw-600">
						SHARE MY CART
					</button>
					<button class="btn bg-grey-light btn-place-order mt-1 fw-600">
						CLEAR MY CART
					</button>
				</div>
			</div>
		</div>
	);
}

export { Cart };
