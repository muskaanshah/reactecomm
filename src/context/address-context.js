import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState([]);
    const objFormData = {
        name: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        mobile: "",
    };
    const [formData, setFormData] = useState(objFormData);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("api/user/address", {
                    headers: {
                        authorization: localStorage.getItem("encodedToken"),
                    },
                });
                setAddress(prev => [...prev, ...res.data.address]);
            } catch (error) {
                console.error("error in address get", error);
            }
        })();
    }, []);
    return (
        < AddressContext.Provider value={{ address, setAddress, formData, setFormData, objFormData }}>
            {children}
        </AddressContext.Provider >
    )
}

const useAddress = () => useContext(AddressContext)

export { AddressProvider, useAddress }