import { useState } from "react";
import { useAddress } from "../../../context";
import { AddressForm } from "./AddressForm";

function AddressSection() {
	const [addAddressForm, setAddAddressForm] = useState(false);
	const { address } = useAddress();
	return (
		<div className="address-section px-1">
			<h3 className="mb-0">My Addresses</h3>
			{address.map((cur) => (
				<div className="address">
					<div>
						<p className="my-0 fw-600">{cur.name}</p>
						<p className="my-0">{cur.street}</p>
						<p className="my-0">
							{cur.city}, {cur.state} - {cur.zipCode}
						</p>
						<p className="my-0">Contact: {cur.mobile}</p>
					</div>
					<div className="address-icons">
						<button className="btn">
							<span className="material-icons-outlined">edit</span>
						</button>
						<button className="btn color-danger">
							<span className="material-icons-outlined">delete</span>
						</button>
					</div>
				</div>
			))}
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
