import { ProductCard } from "./components/ProductCard";
import "../products.css";
import { useCartWishlist } from "../../context/cart-wishlist-context";

function Wishlist() {
	const { state } = useCartWishlist();
	return (
		<div className="container-body">
			<div className="p-1">
				<h2 className="page-heading">
					My wishlist
					<span className="fw-400 wishlist-itemnumber fs-0-9 ml-0-5">
						{state.wishlistItemsNumber} items
					</span>
				</h2>
				<div className="wishlist-listing">
					{state.wishlist.map((currentProduct) => (
						<ProductCard key={currentProduct._id} product={currentProduct} />
					))}
				</div>
			</div>
		</div>
	);
}

export { Wishlist };
