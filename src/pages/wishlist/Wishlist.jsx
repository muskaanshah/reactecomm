import { ProductCard } from "./components/ProductCard";
import "../products.css";

function Wishlist() {
	return (
		<div className="container-body">
			<div className="p-1">
				<h2 className="page-heading">
					My wishlist
					<span className="fw-400 wishlist-itemnumber fs-0-9 ml-0-5">
						74 items
					</span>
				</h2>
				<div className="wishlist-listing">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
		</div>
	);
}

export { Wishlist };
