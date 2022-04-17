import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAlert, useCartWishlist } from "../../context";
import { addToCart, updateCartQty } from "../../utils/cartFunctions";
import { discount } from "../../utils/discountCalculation";
import {
	addToWishlist,
	removeFromWishlist,
} from "../../utils/wishlistFunctions";
import "./singleproduct.css";

function SingleProduct() {
	const { productId } = useParams();
	const { cartState, cartDispatch } = useCartWishlist();
	const { alertDispatch } = useAlert();
	const token = localStorage.getItem("encodedToken");
	const [disabled, setDisabled] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const product = cartState.default.find((item) => item._id === productId);
	const {
		_id,
		name,
		description,
		newprice,
		actualprice,
		url,
		rating,
		prodDesc,
		players,
		playingTime,
		outofstock,
	} = product;
	const isInWishlist = cartState.wishlist.find(
		(wishlistProduct) => wishlistProduct._id === _id
	);
	const itemFind = cartState.cart.find(
		(currentItem) => currentItem._id === _id
	);

	const handleAddToCart = async () => {
		if (token) {
			if (!disabled) {
				if (itemFind) {
					const newCart = await updateCartQty(
						cartState,
						_id,
						"increment",
						alertDispatch
					);
					cartDispatch({
						type: "UPDATE_CART_WISHLIST",
						payload: { value: newCart },
					});
				} else {
					const newCart = await addToCart(cartState, product, alertDispatch);
					cartDispatch({
						type: "UPDATE_CART_WISHLIST",
						payload: { value: newCart },
					});
				}
			}
		} else navigate("/login", { state: { from: location } });
	};

	const handleAddToWishlist = async () => {
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
	useEffect(() => {
		if (outofstock) {
			setDisabled(true);
		}
	}, [outofstock]);
	return (
		<div className="container-body">
			<div className="individual-product">
				<div className="centered">
					<div className="individual-productimg">
						<img className="img-responsive" src={url} alt="gameimage" />
					</div>
				</div>
				<div className="card-product-details px-1">
					<div className="card-product-single">
						<div>
							<h3 className="card-title fs-2 fw-600 px-0">{name}</h3>
							<p className="card-product-description fs-1-25 px-0">
								{description}
							</p>
							<div className="card-product-price p-0">
								<span className="card-product-newprice fs-1-25 fw-600">
									₹{newprice}
								</span>
								{actualprice && (
									<span className="card-product-actualprice fs-1">
										₹{actualprice}
									</span>
								)}
								{actualprice && (
									<span className="card-product-discount fs-1">
										{discount(actualprice, newprice)}% off
									</span>
								)}
							</div>
							<span className="color-success-dark fs-0-8">
								Inclusive of all taxes
							</span>
							<p className="color-grey-dark fs-0-9 my-0">
								<b className="color-danger">Hurry!</b> Only a few peices left
							</p>
						</div>
						<div className="product-rating mt-1">
							<span>{rating}</span>
							<span className="material-icons star-icon"> star </span>
							<span> | </span>
							<span>323 Ratings</span>
						</div>
					</div>
					<div className="button-block my-1">
						<button
							className={`btn btn-transform ls-1 px-0-5 py-1 ${
								disabled ? "btn-disabled" : "bg-primary color-white"
							}`}
							onClick={handleAddToCart}
						>
							<span className="material-icons-outlined">add_shopping_cart</span>
							<span>ADD TO CART</span>
						</button>
						<button
							className={`btn ls-1 px-0-5 py-1 ${
								isInWishlist
									? "bg-primary color-white"
									: "btn-primary-outline color-primary bg-white"
							}`}
							onClick={handleAddToWishlist}
						>
							<span className="material-icons-outlined"> favorite_border </span>
							<span>{isInWishlist ? "WISHLISTED" : "WISHLIST"}</span>
						</button>
					</div>
					<h4 className="my-0-5">Players: {players}</h4>
					<h4 className="my-0-5">Playing time: {playingTime}</h4>
					<h3>Product Details</h3>
					<div className="para-max650">
						{prodDesc.map((desc) => (
							<p>{desc}</p>
						))}
					</div>
					{/* Will implement this later
					<h4>Ratings and Reviews</h4>
					<div>
						<input
							type="text"
							className="input-text input-text-review mr-1"
							placeholder="Write your review"
						/>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export { SingleProduct };
