import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAlert } from "./alert-context";

const AddressContext = createContext();

const objFormData = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    mobile: "",
};
const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState([]);
    const { alertDispatch } = useAlert();
    const [formData, setFormData] = useState(objFormData);
    const token = localStorage.getItem("encodedToken");

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("api/user/address", {
                    headers: {
                        authorization: token,
                    },
                });
                setAddress(prev => [...prev, ...res.data.address]);
            } catch (err) {
                token && alertDispatch({
                    type: "ACTIVATE_ALERT",
                    payload: { alertType: "error", alertMsg: err.message },
                });
            }
        })();
    }, [alertDispatch, token]);
    return (
        < AddressContext.Provider value={{ address, setAddress, formData, setFormData, objFormData }}>
            {children}
        </AddressContext.Provider >
    )
}

const useAddress = () => useContext(AddressContext)

export { AddressProvider, useAddress }