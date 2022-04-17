import { useState } from "react";
import { AddressCard } from "./components/AddressCard";
import { PriceCard } from "./components/PriceCard";
import { useAddress } from "../../context";
import "./checkout.css";

function Checkout() {
	const { address } = useAddress();
	const [selectedAddress, setSelectedAddress] = useState("");
	return (
		<div className="container-body py-1 px-2">
			<div className="ordersummary-flex">
				<div>
					<h2 className="page-heading">Select your address</h2>
					<div className="flex-column address-radiobox">
						{address.map((curAddress) => (
							<AddressCard
								curAddress={curAddress}
								selectedAddress={selectedAddress}
								setSelectedAddress={setSelectedAddress}
							/>
						))}
					</div>
				</div>
				<div>
					<h2 className="page-heading">Order Summary</h2>
					<PriceCard selectedAddress={selectedAddress} />
				</div>
			</div>
		</div>
	);
}

export { Checkout };
