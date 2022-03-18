import { ProductCard } from "./components/ProductCard";
import "../products.css";

function Wishlist() {
	return (
		<div class="container-body">
			<div class="p-1">
				<h2 class="page-heading">
					My wishlist
					<span class="fw-400 wishlist-itemnumber fs-0-9 ml-0-5">74 items</span>
				</h2>
				<div class="wishlist-listing">
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
