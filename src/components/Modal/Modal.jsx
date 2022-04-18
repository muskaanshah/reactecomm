import { useEffect } from "react";
import { useAlert, useCartWishlist, useProduct } from "../../context";
import { removeFromCart } from "../../utils/cartFunctions";
import { addToWishlist } from "../../utils/wishlistFunctions";
import "./modal.css";

function Modal() {
  const { cartState, cartDispatch } = useCartWishlist();
  const { productState } = useProduct();
  const { alertDispatch } = useAlert();
  const handleRemoveItem = async () => {
    const newCart = await removeFromCart(
      cartState,
      cartState.idOfProduct,
      alertDispatch
    );
    cartDispatch({
      type: "UPDATE_CART_WISHLIST",
      payload: { value: newCart },
    });
    cartDispatch({
      type: "CLOSE_MODAL",
    });
  };
  const product = productState.default.find(
    (product) => product._id === cartState.idOfProduct
  );
  const handleAddToWishlist = async () => {
    const newCart = await removeFromCart(
      cartState,
      cartState.idOfProduct,
      alertDispatch
    );
    cartDispatch({
      type: "UPDATE_CART_WISHLIST",
      payload: { value: newCart },
    });
    const newCart2 = await addToWishlist(newCart, product, alertDispatch);
    cartDispatch({
      type: "UPDATE_CART_WISHLIST",
      payload: { value: newCart2 },
    });
    cartDispatch({
      type: "CLOSE_MODAL",
    });
  };

  useEffect(() => {
    document.body.classList.add("scrollBehaviour");
    return () => {
      document.body.classList.remove("scrollBehaviour");
    };
  }, []);
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button
          className="btn-close"
          onClick={() =>
            cartDispatch({
              type: "CLOSE_MODAL",
            })
          }
        >
          <span className="material-icons"> close </span>
        </button>
        <p className="modal-body">Are you sure you want to remove this item?</p>
        <div className="modal-actionbuttons">
          <button
            className="btn bg-grey-light borderradius-0-5"
            onClick={handleRemoveItem}
          >
            Delete
            <span className="material-icons"> delete </span>
          </button>
          <button
            className="btn bg-primary color-white borderradius-0-5"
            onClick={handleAddToWishlist}
          >
            Move to wishlist
            <span className="material-icons"> shopping_bag </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export { Modal };
