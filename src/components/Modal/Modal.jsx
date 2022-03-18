import "./modal.css";

function Modal() {
	return (
		<div id="modal" className="modal boxshadow-medium">
			<button className="btn-close">
				<span className="material-icons modal-close"> close </span>
			</button>
			<p className="modal-body">Are you sure you want to remove this item?</p>
			<div className="modal-actionbuttons">
				<button className="btn bg-danger color-white">
					Delete
					<span className="material-icons"> delete </span>
				</button>
				<button className="btn bg-success color-white">
					Move to wishlist
					<span className="material-icons"> shopping_bag </span>
				</button>
			</div>
		</div>
	);
}

export { Modal };
