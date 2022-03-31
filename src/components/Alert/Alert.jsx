import "./alert.css";

function Alert({ type, msg }) {
	let alertClass = "";
	let spanClass = "info";

	if (type === "success") {
		alertClass = "alert-success";
		spanClass = "check_circle";
	}
	if (type === "warning") {
		alertClass = "alert-warning";
		spanClass = "warning";
	}
	if (type === "error") {
		alertClass = "alert-error";
		spanClass = "error";
	}
	return (
		<div className={`alert borderradius-0-5 ${alertClass}`}>
			<span className="material-icons">{spanClass}</span>
			{msg}
		</div>
	);
}

export { Alert };
