import { useCartWishlist } from "../../context/cart-wishlist-context";
import "./modal.css";
import { useEffect } from "react";

function Modal() {
	const { state, dispatch } = useCartWishlist();
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
						dispatch({
							type: "CLOSE_MODAL",
						})
					}
				>
					<span className="material-icons"> close </span>
				</button>
				<p className="modal-body">Are you sure you want to remove this item?</p>
				<div className="modal-actionbuttons">
					<button
						className="btn bg-danger color-white"
						onClick={() => {
							dispatch({
								type: "REMOVE_FROM_CART",
								payload: { value: state.idOfProduct, isDeleteItem: true },
							});
							dispatch({
								type: "CLOSE_MODAL",
							});
						}}
					>
						Delete
						<span className="material-icons"> delete </span>
					</button>
					<button className="btn bg-success color-white">
						Move to wishlist
						<span className="material-icons"> shopping_bag </span>
					</button>
				</div>
			</div>
		</div>
	);
}

export { Modal };
