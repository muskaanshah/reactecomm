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
					<h2 className="page-heading">Choose your payment method</h2>
					<div className="flex-column payment-radiobox">
						<label htmlFor="radio-payment" className="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod1"
								checked
							/>
							Debit Card
						</label>
						<label htmlFor="radio-payment" className="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod2"
							/>
							Credit Card
						</label>
						<label htmlFor="radio-payment" className="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod3"
							/>
							Paytm Wallet
						</label>
						<label htmlFor="radio-payment" className="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod4"
							/>
							UPI
						</label>
						<label htmlFor="radio-payment" className="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod4"
							/>
							Cash on Delivery
						</label>
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
