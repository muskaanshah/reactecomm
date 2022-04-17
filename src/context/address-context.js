import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
    const [address, setAddress] = useState([]);

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
        < AddressContext.Provider value={{ address }}>
            {children}
        </AddressContext.Provider >
    )
}

const useAddress = () => useContext(AddressContext)

export { AddressProvider, useAddress }