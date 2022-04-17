import { useState } from "react";

function AddressForm({ setAddAddressForm }) {
	const objFormData = {
		name: "",
		street: "",
		city: "",
		state: "",
		country: "",
		zipCode: "",
		mobile: "",
	};
	const [formData, setFormData] = useState(objFormData);

	const setFormHandler = (e, field) => {
		setFormData({ ...formData, [field]: e.target.value });
	};

	return (
		<div className="coupons-modal-wrapper">
			<div className="address-form px-1 pb-1 bg-white br-4px">
				<p>Add new address</p>
				<form>
					<input
						type="text"
						className="input-text input-address fs-0-9"
						placeholder="Name *"
						onChange={(e) => setFormHandler(e, "name")}
						value={formData.name}
						required
					/>
					<input
						type="text"
						className="input-text input-address fs-0-9"
						placeholder="House No, Street *"
						onChange={(e) => setFormHandler(e, "street")}
						value={formData.street}
						required
					/>
					<input
						type="text"
						className="input-text input-address fs-0-9"
						placeholder="City *"
						onChange={(e) => setFormHandler(e, "city")}
						value={formData.city}
						required
					/>
					<input
						type="text"
						className="input-text input-address fs-0-9"
						placeholder="State *"
						onChange={(e) => setFormHandler(e, "state")}
						value={formData.state}
						required
					/>
					<input
						type="text"
						className="input-text input-address fs-0-9"
						placeholder="Country *"
						onChange={(e) => setFormHandler(e, "country")}
						value={formData.country}
						required
					/>
					<input
						type="text"
						className="input-text input-address fs-0-9"
						placeholder="Zip Code *"
						onChange={(e) => setFormHandler(e, "zipCode")}
						value={formData.zipCode}
						required
					/>
					<input
						type="text"
						className="input-text input-address fs-0-9"
						placeholder="Contact number *"
						onChange={(e) => setFormHandler(e, "mobile")}
						value={formData.mobile}
						required
					/>
					<div className="centered">
						<input
							type="submit"
							className="btn bg-primary py-0-5 br-4px"
							value="Save"
						/>
						<button
							className="btn py-0-5 border-primary br-4px"
							onClick={() => setAddAddressForm(false)}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export { AddressForm };
