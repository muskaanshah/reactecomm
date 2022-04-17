import axios from "axios";

const addAddress = async (setAddress, setAddAddressForm, setFormData, objFormData, formData) => {
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
    } catch (err) {
        console.log(err);
    }
};

const updateAddress = async (setAddress,
    setAddAddressForm,
    setFormData,
    objFormData,
    formData) => {
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
    }
    catch (err) {
        console.log(err)
    }
}

export { addAddress, updateAddress }