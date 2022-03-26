import { useCartWishlist } from "../../../context/cart-wishlist-context";
import { discount } from "../../../utils/discountCalculation";

function ProductCard({
	product: { _id, name, description, newprice, actualprice, url },
}) {
	const { cartDispatch } = useCartWishlist();
	return (
		<div className="card-product-wrapper">
			<div className="card card-product">
				<button
					className="btn-close"
					onClick={() =>
						cartDispatch({
							type: "REMOVE_FROM_WISHLIST",
							payload: { value: _id },
						})
					}
				>
					<span className="material-icons"> close </span>
				</button>
				<div className="card-image-wrapper">
					<img className="img-responsive" src={url} alt="product" />
				</div>
				<div className="card-product-details">
					<h3 className="card-title">{name}</h3>
					<p className="card-product-description">{description}</p>
					<div className="card-product-price pb-0">
						<span className="card-product-newprice">Rs.{newprice}</span>
						{actualprice && (
							<span className="card-product-actualprice">Rs.{actualprice}</span>
						)}
						{actualprice && (
							<span className="card-product-discount">
								{discount(actualprice, newprice)}% off
							</span>
						)}
					</div>
				</div>
				<div className="card-button">
					<button className="btn btn-addtocart bg-primary ls-1 px-0-5 py-1">
						<span
							className="btn-addtocart-text"
							onClick={() => {
								cartDispatch({
									type: "ADD_TO_CART",
									payload: { value: _id },
								});
								cartDispatch({
									type: "REMOVE_FROM_WISHLIST",
									payload: { value: _id },
								});
							}}
						>
							MOVE TO CART
						</span>
						<span className="material-icons-outlined btn-addtocart-icon">
							add_shopping_cart
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export { ProductCard };
