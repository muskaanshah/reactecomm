function AddressCard() {
	return (
		<label
			htmlFor="radio-address"
			className="address-selector p-0-5 centered br-4px"
		>
			<input
				id="radio-address"
				type="radio"
				name="radio-address"
				value="add1"
				checked
			/>
			<p className="m-0">
				<b>Muskaan - Home:</b> 41, Gandhi Nagar Road, Flat-3, Sindur Sunshine,
				Kilpauk, Chennai - 600 010
			</p>
		</label>
	);
}

export { AddressCard };
