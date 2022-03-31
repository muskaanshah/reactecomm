import { useCartWishlist } from "../../context/cart-wishlist-context";
import "./modal.css";
import { useEffect } from "react";

function Modal() {
	const { cartState, cartDispatch } = useCartWishlist();
	useEffect(() => {
		document.body.classList.add("scrollBehaviour");
		return () => {
			document.body.classList.remove("scrollBehaviour");
		};
	}, []);
	return (
		<div className="modal-wrapper">
			<div className="modal">
				<button
					className="btn-close"
					onClick={() =>
						cartDispatch({
							type: "CLOSE_MODAL",
						})
					}
				>
					<span className="material-icons"> close </span>
				</button>
				<p className="modal-body">Are you sure you want to remove this item?</p>
				<div className="modal-actionbuttons">
					<button
						className="btn bg-grey-light"
						onClick={() => {
							cartDispatch({
								type: "REMOVE_FROM_CART",
								payload: { value: cartState.idOfProduct, isDeleteItem: true },
							});
							cartDispatch({
								type: "CLOSE_MODAL",
							});
						}}
					>
						Delete
						<span className="material-icons"> delete </span>
					</button>
					<button
						className="btn bg-primary color-white"
						onClick={() => {
							cartDispatch({
								type: "REMOVE_FROM_CART",
								payload: { value: cartState.idOfProduct, isDeleteItem: true },
							});
							cartDispatch({
								type: "ADD_TO_WISHLIST",
								payload: { value: cartState.idOfProduct },
							});
							cartDispatch({
								type: "CLOSE_MODAL",
							});
						}}
					>
						Move to wishlist
						<span className="material-icons"> shopping_bag </span>
					</button>
				</div>
			</div>
		</div>
	);
}

export { Modal };
