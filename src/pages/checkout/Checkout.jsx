import { AddressCard } from "./components/AddressCard";
import { PriceCard } from "./components/PriceCard";
import "./checkout.css";

function Checkout() {
	return (
		<div className="container-body py-1 px-2">
			<div className="ordersummary-flex">
				<div>
					<h2 className="page-heading">Select your address</h2>
					<div className="flex-column address-radiobox">
						<AddressCard />
						<AddressCard />
						<AddressCard />
					</div>
				</div>
				<div>
					<h2 className="page-heading">Order Summary</h2>
					<PriceCard />
				</div>
			</div>
		</div>
	);
}

export { Checkout };
