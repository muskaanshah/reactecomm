import { useParams, useNavigate } from "react-router-dom";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import { useProduct } from "../../context/product-context";
import { discount } from "../../utils/discountCalculation";
import "./singleproduct.css";

function SingleProduct() {
	const { productId } = useParams();
	const { productState } = useProduct();
	const { cartState, cartDispatch } = useCartWishlist();
	const token = localStorage.getItem("encodedToken");
	const navigate = useNavigate();
	const {
		_id,
		name,
		description,
		newprice,
		actualprice,
		url,
		rating,
		descriptionExpanded,
		players,
		playingTime,
	} = productState.default.find((item) => item._id === productId);
	const isInWishlist = cartState.wishlist.find(
		(wishlistProduct) => wishlistProduct._id === _id
	);
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
								<span className="card-product-actualprice fs-1">
									₹{actualprice}
								</span>
								<span className="card-product-discount fs-1">
									{discount(actualprice, newprice)}% off
								</span>
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
							className="btn bg-primary btn-transform color-white ls-1 px-0-5 py-1"
							onClick={() =>
								token
									? cartDispatch({
											type: "ADD_TO_CART",
											payload: { value: _id },
									  })
									: navigate("/login")
							}
						>
							<span className="material-icons-outlined">add_shopping_cart</span>
							<span>ADD TO CART</span>
						</button>
						<button
							className={`btn ls-1 px-0-5 py-1 ${
								isInWishlist
									? "btn-primary-outline color-primary bg-white"
									: "bg-primary color-white"
							}`}
							onClick={(e) => {
								token
									? isInWishlist
										? cartDispatch({
												type: "REMOVE_FROM_WISHLIST",
												payload: { value: _id },
										  })
										: cartDispatch({
												type: "ADD_TO_WISHLIST",
												payload: { value: _id },
										  })
									: navigate("/login");
							}}
						>
							<span className="material-icons-outlined"> favorite_border </span>
							<span>{isInWishlist ? "WISHLIST" : "WISHLISTED"}</span>
						</button>
					</div>
					<h4 className="my-0-5">Players: {players}</h4>
					<h4 className="my-0-5">Playing time: {playingTime}</h4>
					<h3>Product Details</h3>
					<p className="para-max650">{descriptionExpanded}</p>
					<h4>Ratings and Reviews</h4>
					<div>
						<input
							type="text"
							className="input-text input-text-review mr-1"
							placeholder="Write your review"
							id="#"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export { SingleProduct };
