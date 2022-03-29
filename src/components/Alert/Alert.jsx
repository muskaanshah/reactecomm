import "./alert.css";

function Alert({ type, msg }) {
	return (
		<div
			class={`alert borderradius-0-5 ${
				type === "success"
					? "alert-success"
					: type === "warning"
					? "alert-warning"
					: "alert-error"
			}`}
		>
			<span class="material-icons">
				{type === "success"
					? "check_circle"
					: type === "warning"
					? "warning"
					: "error"}
			</span>
			{msg}
		</div>
	);
}

export { Alert };
