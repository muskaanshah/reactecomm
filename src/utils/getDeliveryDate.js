const getDeliveryDate = (deliveryDays) => {
    const someDate = new Date();
    const result = someDate.setDate(someDate.getDate() + deliveryDays);
    return `${new Date(result).getDate()}/${new Date(result).getMonth() + 1
        }/${new Date(result).getFullYear()}`;
};

export { getDeliveryDate }