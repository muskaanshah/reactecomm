function AddressCard({ curAddress, selectedAddress, setSelectedAddress }) {
	return (
		<label className="address-selector p-0-5 centered br-4px">
			<input
				type="radio"
				name="radio-address"
				value={curAddress._id}
				checked={selectedAddress === curAddress._id}
				onChange={() => setSelectedAddress(curAddress._id)}
			/>
			<p className="m-0">
				<b>{curAddress.name}:</b> {curAddress.street}, {curAddress.city},{" "}
				{curAddress.state} - {curAddress.zipCode}
			</p>
		</label>
	);
}

export { AddressCard };
