import { useNavigate, useLocation } from "react-router-dom";
import { useAlert, useCartWishlist } from "../../../context";
import { addToCart } from "../../../utils/cartFunctions";
import { discount } from "../../../utils/discountCalculation";
import { addToWishlist, removeFromWishlist } from "../../../utils/wishlistFunctions";

function ProductCard({ product }) {
  const { _id, url, name, description, newprice, actualprice, outofstock, badge } =
    product;
  const { cartState, cartDispatch } = useCartWishlist();
  const { alertDispatch, alertState } = useAlert();
  const token = localStorage.getItem("encodedToken");
  const navigate = useNavigate();
  const location = useLocation();
  const badgeColors = {
    "Best selling": "bg-success-dark",
    "Top 10": "bg-warning",
    "Only few products left": "bg-danger",
    "People's favourite": "bg-tealgreen-light",
  };

  const isInWishlist = cartState.wishlist?.find(
    (wishlistProduct) => wishlistProduct._id === _id
  );
  const itemFind = cartState.cart?.find((currentItem) => currentItem._id === product._id);

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (token) {
      if (itemFind) {
        navigate("/cart");
      } else {
        const newCart = await addToCart(cartState, product, alertDispatch);
        cartDispatch({
          type: "UPDATE_CART_WISHLIST",
          payload: { value: newCart },
        });
      }
    } else navigate("/login", { state: { from: location } });
  };

  const handleAddToWishlist = async (e) => {
    e.stopPropagation();
    if (token) {
      if (isInWishlist) {
        const newCart = await removeFromWishlist(cartState, _id, alertDispatch);
        cartDispatch({
          type: "UPDATE_CART_WISHLIST",
          payload: { value: newCart },
        });
      } else {
        const newCart = await addToWishlist(cartState, product, alertDispatch);
        cartDispatch({
          type: "UPDATE_CART_WISHLIST",
          payload: { value: newCart },
        });
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card card-product br-4px" onClick={() => navigate(`/product/${_id}`)}>
      <div className="card-image-wrapper">
        <img
          className="img-responsive product-objectfit-contain"
          src={url}
          alt="product"
        />
      </div>
      {badge && <span className={`card-badge ${badgeColors[badge]}`}>{badge}</span>}
      <div className="card-product-details">
        <button
          disabled={alertState.wishlistLoader}
          className={`card-product-favourite ${isInWishlist ? "activeButton" : ""}`}
          onClick={handleAddToWishlist}
        >
          <span className="material-icons"> favorite </span>
        </button>
        <h3 className="card-title">{name}</h3>
        <p className="card-product-description">{description}</p>
        <div className="card-product-price pb-0">
          <span className="card-product-newprice">???{newprice}</span>
          {actualprice && (
            <span className="card-product-actualprice">???{actualprice}</span>
          )}
          {actualprice && (
            <span className="card-product-discount">
              {discount(actualprice, newprice)}% off
            </span>
          )}
        </div>
      </div>
      <div className="card-button">
        <button
          className="btn btn-addtocart bg-primary ls-1 px-0-5 py-1 br-4px"
          onClick={handleAddToCart}
          disabled={outofstock || alertState.cartLoader}
        >
          <span className="btn-addtocart-text">
            {!itemFind ? "ADD TO CART" : "GO TO CART"}
          </span>
          <span className="material-icons-outlined btn-addtocart-icon">
            add_shopping_cart
          </span>
        </button>
      </div>
      {outofstock && (
        <div className="card-outofstock-overlay">
          <p>Out of stock ???</p>
        </div>
      )}
    </div>
  );
}

export { ProductCard };
