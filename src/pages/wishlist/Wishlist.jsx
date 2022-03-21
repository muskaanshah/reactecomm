import { ProductCard } from "./components/ProductCard";
import "../products.css";
import { useCartWishlist } from "../../context/cart-wishlist-context";
import { Link } from "react-router-dom";

function Wishlist() {
	const { cartState } = useCartWishlist();
	console.log(cartState.wishlist);
	return (
		<div>
			{cartState.wishlist.length > 0 ? (
				<div className="container-body">
					<div className="p-1">
						<h2 className="page-heading">
							My wishlist
							<span className="fw-400 wishlist-itemnumber fs-0-9 ml-0-5">
								{cartState.wishlistItemsNumber} items
							</span>
						</h2>
						<div className="wishlist-listing">
							{cartState.wishlist.map((currentProduct) => (
								<ProductCard
									key={currentProduct._id}
									product={currentProduct}
								/>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="wishlist-empty">
					<h1>
						You havent added anything in your wishlist! Let's start shopping
					</h1>
					<Link to="/products">
						<button className="btn bg-primary color-secondary">
							Start Shopping
						</button>
					</Link>
					<img
						src="https://media3.giphy.com/media/RH2BuvH61QJAPsIUKY/giphy.gif?cid=790b76119f5d8520cdfc31e63a3e817cb138b74a405699aa&rid=giphy.gif&ct=g"
						width="200"
						height="200"
						frameBorder="0"
					></img>
				</div>
			)}
		</div>
	);
}

export { Wishlist };
