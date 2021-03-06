import { Link } from "react-router-dom";
import { useCartWishlist } from "../../context";
import { v4 as uuid } from "uuid";

import "./ordersummary.css";

function OrderSummary() {
    const { cartState } = useCartWishlist();
    console.log(cartState);
    return (
        <div className="container-body centered flex-column">
            <h2 className="mb-0">Order summary</h2>
            <p className="my-0 fw-600">Total amount: ₹{cartState.order.amount}</p>
            <p className="my-0 fw-600">Payment ID: {cartState.order.paymentId}</p>
            <p className="my-0 fw-600">Order ID: {uuid()}</p>
            <div className="order-items">
                {cartState?.order?.items.map(
                    (item) =>
                        item.qty > 0 && (
                            <div className="order-item p-1">
                                <img
                                    src={item.url}
                                    alt="product"
                                    className="img-responsive"
                                />
                                <div>
                                    <p className="my-0 fw-600">{item.name}</p>
                                    <p className="my-0">Quantity: {item.qty}</p>
                                    <p className="my-0">Price: ₹{item.newprice}</p>
                                </div>
                            </div>
                        )
                )}
                <div className="divider-black"></div>
                <h3 className="centered">Thank you for shopping with us</h3>
            </div>
            <Link to="/products" className="btn bg-primary color-secondary br-4px">
                Continue shopping
            </Link>
        </div>
    );
}

export { OrderSummary };
