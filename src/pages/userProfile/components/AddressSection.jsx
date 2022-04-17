import { useState } from "react";
import { useAddress, useAlert } from "../../../context";
import { removeAddress } from "../../../utils/addressFunctions";
import { AddressForm } from "./AddressForm";

function AddressSection() {
	const [addAddressForm, setAddAddressForm] = useState(false);
	const { address, setFormData, setAddress } = useAddress();
	const { alertDispatch } = useAlert();

	const editAddressHandler = (addressVal) => {
		const objEdit = {
			...addressVal,
			_id: addressVal._id,
			name: addressVal.name,
			street: addressVal.street,
			city: addressVal.city,
			country: addressVal.country,
			state: addressVal.state,
			zipCode: addressVal.zipCode,
			mobile: addressVal.mobile,
		};
		setAddAddressForm(true);
		setFormData(objEdit);
	};

	const deleteAddressHandler = (cur) => {
		removeAddress(setAddress, alertDispatch, cur._id);
	};
	return (
		<div className="address-section px-1">
			<h3 className="mb-0">My Addresses</h3>
			<div className="address-wrapper">
				{address.map((cur) => (
					<div className="address" key={cur._id}>
						<div>
							<p className="my-0 fw-600">{cur.name}</p>
							<p className="my-0">{cur.street}</p>
							<p className="my-0">
								{cur.city}, {cur.state} - {cur.zipCode}
							</p>
							<p className="my-0">Contact: {cur.mobile}</p>
						</div>
						<div className="address-icons">
							<button className="btn" onClick={() => editAddressHandler(cur)}>
								<span className="material-icons-outlined">edit</span>
							</button>
							<button
								className="btn color-danger"
								onClick={() => deleteAddressHandler(cur)}
							>
								<span className="material-icons-outlined">delete</span>
							</button>
						</div>
					</div>
				))}
			</div>
			<button
				className="btn color-primary border-primary fw-500 py-0-5 my-0-5 br-4px"
				onClick={() => setAddAddressForm(true)}
			>
				Add new address
			</button>
			{addAddressForm && <AddressForm setAddAddressForm={setAddAddressForm} />}
		</div>
	);
}

export { AddressSection };
