import "./checkout.css";
import { AddressCard } from "./components/AddressCard";
import { PriceCard } from "./components/PriceCard";

function Checkout() {
	return (
		<div class="container-body py-1 px-2">
			<div class="ordersummary-flex">
				<div>
					<h2 class="page-heading">Select your address</h2>
					<div class="flex-column address-radiobox">
						<AddressCard />
						<AddressCard />
						<AddressCard />
					</div>
					<h2 class="page-heading">Choose your payment method</h2>
					<div class="flex-column payment-radiobox">
						<label for="radio-payment" class="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod1"
								checked
							/>
							Debit Card
						</label>
						<label for="radio-payment" class="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod2"
							/>
							Credit Card
						</label>
						<label for="radio-payment" class="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod3"
							/>
							Paytm Wallet
						</label>
						<label for="radio-payment" class="p-0-5">
							<input
								id="radio-payment"
								type="radio"
								name="radio-payment"
								value="paymentmethod4"
							/>
							UPI
						</label>
						<label for="radio-payment" class="p-0-5">
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
					<h2 class="page-heading">Order Summary</h2>
					<PriceCard />
				</div>
			</div>
		</div>
	);
}

export { Checkout };
