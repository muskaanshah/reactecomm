import axios from "axios";

const addAddress = async (setAddress, setAddAddressForm, setFormData, objFormData, formData, alertDispatch) => {
    try {
        const res = await axios.post(
            "api/user/address",
            {
                address: formData,
            },
            {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            }
        );
        setAddress([...res.data.address]);
        setAddAddressForm(false);
        setFormData(objFormData);
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "success",
                alertMsg: "Address added",
            },
        });
    } catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
};

const updateAddress = async (setAddress, setAddAddressForm, setFormData, objFormData, formData, alertDispatch) => {
    try {
        const res = await axios.post(
            `api/user/address/${formData._id}`,
            {
                address: formData,
            },
            {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            }
        );
        setAddress([...res.data.address]);
        setAddAddressForm(false);
        setFormData(objFormData);
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "success",
                alertMsg: "Address updated",
            },
        });
    }
    catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
}

const removeAddress = async (setAddress, alertDispatch, addressId) => {
    try {
        const res = await axios.delete(`api/user/address/${addressId}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        setAddress([...res.data.address]);
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "success",
                alertMsg: "Address deleted",
            },
        });
    }
    catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
}

export { addAddress, updateAddress, removeAddress }