import "./modal.css";

function Modal() {
	return (
		<div id="modal" class="modal boxshadow-medium">
			<button class="btn-close">
				<span class="material-icons modal-close"> close </span>
			</button>
			<p class="modal-body">Are you sure you want to remove this item?</p>
			<div class="modal-actionbuttons">
				<button class="btn bg-danger color-white">
					Delete
					<span class="material-icons"> delete </span>
				</button>
				<button class="btn bg-success color-white">
					Move to wishlist
					<span class="material-icons"> shopping_bag </span>
				</button>
			</div>
		</div>
	);
}

export { Modal };
