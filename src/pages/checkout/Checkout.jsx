import { useState } from "react";
import { AddressCard } from "./components/AddressCard";
import { PriceCard } from "./components/PriceCard";
import { useAddress } from "../../context";
import "./checkout.css";
import { AddressForm } from "../userProfile/components/AddressForm";

function Checkout() {
  const { address } = useAddress();
  const [addAddressForm, setAddAddressForm] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  return (
    <div className="container-body py-1 px-2">
      <div className="ordersummary-flex">
        <div>
          <h2 className="page-heading">Select your address</h2>
          <div className="flex-column address-radiobox">
            {address.length > 0 ? (
              <>
                {address.map((curAddress) => (
                  <AddressCard
                    curAddress={curAddress}
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    key={curAddress._id}
                  />
                ))}
              </>
            ) : (
              <h3>No addresses added yet, add an address to proceed</h3>
            )}
            <label
              className="address-selector p-0-5 centered br-4px cursor-pointer"
              onClick={() => setAddAddressForm(true)}
            >
              <p className="m-0">+ Add a new address</p>
            </label>
          </div>
        </div>
        <div>
          <h2 className="page-heading">Order Summary</h2>
          <PriceCard selectedAddress={selectedAddress} />
        </div>
        {addAddressForm && <AddressForm setAddAddressForm={setAddAddressForm} />}
      </div>
    </div>
  );
}

export { Checkout };
