import { useEffect } from "react";
import { useAlert, useCartWishlist } from "../../context";
import { removeFromCart } from "../../utils/cartFunctions";
import { addToWishlist } from "../../utils/wishlistFunctions";
import "./modal.css";

function Modal() {
	const { cartState, cartDispatch } = useCartWishlist();
	const { alertDispatch } = useAlert();
	const handleRemoveItem = async () => {
		const newCart = await removeFromCart(cartState, cartState.idOfProduct);
		cartDispatch({
			type: "REMOVE_FROM_CART",
			payload: { value: newCart },
		});
		cartDispatch({
			type: "CLOSE_MODAL",
		});
	};
	const product = cartState.default.find(
		(product) => product._id === cartState.idOfProduct
	);
	const handleAddToWishlist = async () => {
		const newCart = await removeFromCart(cartState, cartState.idOfProduct);
		cartDispatch({
			type: "REMOVE_FROM_CART",
			payload: { value: newCart },
		});
		const newCart2 = await addToWishlist(cartState, product);
		cartDispatch({
			type: "ADD_TO_WISHLIST",
			payload: { value: newCart2 },
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
						onClick={handleRemoveItem}
					>
						Delete
						<span className="material-icons"> delete </span>
					</button>
					<button
						className="btn bg-primary color-white borderradius-0-5"
						onClick={handleAddToWishlist}
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
