import { useEffect } from "react";
import { useAlert } from "../../context/alert-context";
import "./alert.css";

function Alert() {
	const { alertState, alertDispatch } = useAlert();
	let alertClass = "";
	let spanClass = "info";

	if (alertState.alertType === "success") {
		alertClass = "alert-success";
		spanClass = "check_circle";
	}
	if (alertState.alertType === "warning") {
		alertClass = "alert-warning";
		spanClass = "warning";
	}
	if (alertState.alertType === "error") {
		alertClass = "alert-error";
		spanClass = "error";
	}

	useEffect(() => {
		if (alertState.active) {
			setTimeout(() => {
				alertDispatch({ type: "DEACTIVATE_ALERT" });
			}, 3000);
		}
	}, [alertState.active, alertDispatch]);
	return (
		<>
			{alertState.active && (
				<div className={`alert borderradius-0-5 ${alertClass}`}>
					<span className="material-icons">{spanClass}</span>
					{alertState.alertMsg}
				</div>
			)}
		</>
	);
}

export { Alert };
