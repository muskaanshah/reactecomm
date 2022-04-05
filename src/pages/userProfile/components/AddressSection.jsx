function AddressSection() {
	return (
		<div className="address-section px-1">
			<h3 className="mb-0">My Addresses</h3>
			<div className="address">
				<div>
					<p className="my-0 fw-600">Adarsh Balika</p>
					<p className="my-0">#1/4, Outer Ring Road, Kadubeesanhalli</p>
					<p className="my-0">Bangalore, Karnataka - 560037</p>
					<p className="my-0">Contact: +91 90000 00012</p>
				</div>
				<div className="address-icons">
					<span className="material-icons-outlined">edit</span>
					<span className="material-icons-outlined">delete</span>
				</div>
			</div>
			<button className="btn color-primary border-primary fw-500 py-0-5 my-0-5 br-4px">
				Add new address
			</button>
		</div>
	);
}

export { AddressSection };
