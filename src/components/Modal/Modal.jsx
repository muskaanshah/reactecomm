import { useEffect } from "react";
import { useAlert, useCartWishlist } from "../../context";
import { removeFromCart } from "../../utils/cartFunctions";
import "./modal.css";

function Modal() {
	const { cartState, cartDispatch } = useCartWishlist();
	const { alertDispatch } = useAlert();
	const removeItemHandler = async () => {
		const newCart = await removeFromCart(cartState, cartState.idOfProduct);
		cartDispatch({
			type: "REMOVE_FROM_CART",
			payload: { value: newCart },
		});
		cartDispatch({
			type: "CLOSE_MODAL",
		});
	};
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
						className="btn bg-grey-light borderradius-0-5"
						onClick={removeItemHandler}
					>
						Delete
						<span className="material-icons"> delete </span>
					</button>
					<button
						className="btn bg-primary color-white borderradius-0-5"
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
							alertDispatch({
								type: "ACTIVATE_ALERT",
								payload: {
									alertType: "success",
									alertMsg: "Added to wishlist",
								},
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
