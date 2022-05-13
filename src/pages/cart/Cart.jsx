import { Link } from "react-router-dom";
import { ProductCardHorizontal } from "./components/ProductCardHorizontal";
import { Modal } from "../../components/Modal/Modal";
import { useAlert, useCartWishlist } from "../../context";
import "./cart.css";
import { clearCart } from "../../utils/cartFunctions";

function Cart() {
	const { cartState, cartDispatch } = useCartWishlist();
	const { alertDispatch, alertState } = useAlert();
	const handleClearCart = async () => {
		const newCart = await clearCart(cartState, alertDispatch);
		cartDispatch({
			type: "UPDATE_CART_WISHLIST",
			payload: { value: newCart },
		});
	};
	return (
		<div>
			{
				alertState.productLoader ? (
					<div className="loader-wrapper centered">
						<div className="loader">Loading...</div>
					</div>
				) :
				cartState?.cart?.length > 0 ? (
					<>
						{cartState.closeButton && <Modal />}
						<div className={`container-body py-1 px-2`}>
							<div className="cartproduct">
								<div className="cart-cartproduct">
									<div className="cartsummary-header">
										<h2 className="mb-0">Your cart</h2>
										<p className="fw-500 m-0 flex-end">
											<span className="material-icons fs-1-25">
												location_on
											</span>
											Delivering to Chennai - 600 010
										</p>
									</div>
									<div className="divider-black"></div>
									<div className="card-cart-product mt-1">
										{cartState.cart
											.filter((currentProduct) => currentProduct.qty !== 0)
											.map((currentProduct) => (
												<ProductCardHorizontal
													key={currentProduct._id}
													product={currentProduct}
												/>
											))}
									</div>
								</div>
								<div>
									<h2 className="mb-0">
										<span className="fw-500">
											Subtotal ({cartState.cartItemsNumber} items):{" "}
										</span>{" "}
										₹ {cartState.cartPrice}
									</h2>
									<div className="divider-black"></div>
									<Link
										to="/checkout"
										className="btn bg-primary btn-place-order mt-1 fw-600 color-white br-4px"
									>
										PROCEED TO CHECKOUT
									</Link>
									{/* Will be implemented later
									<button className="btn bg-secondary btn-place-order mt-1 fw-600 br-4px">
										SHARE MY CART
									</button> */}
									<button
										className="btn bg-grey-light btn-place-order mt-1 fw-600 br-4px"
										onClick={handleClearCart}
									>
										CLEAR MY CART
									</button>
								</div>
							</div>
						</div>
					</>
				) : (
					<div className="cart-empty">
						<h1>
							You havent added anything in your cart! Let's start shopping
						</h1>
						<Link to="/products" className="btn bg-primary color-secondary br-4px">
							Start Shopping
						</Link>
						<img
							src="https://media3.giphy.com/media/RH2BuvH61QJAPsIUKY/giphy.gif?cid=790b76119f5d8520cdfc31e63a3e817cb138b74a405699aa&rid=giphy.gif&ct=g"
							width="200"
							height="200"
							frameBorder="0"
							alt="shopping-bunny"
						></img>
					</div>
				)
			}
		</div>
	);
}

export { Cart };
