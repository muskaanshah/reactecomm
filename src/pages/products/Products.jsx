import "../products.css";
import { ProductCard } from "./components/ProductCard";
import { FilterSection } from "./components/FilterSection";
import { useProduct } from "../../context/product-context";

function Products() {
	const { state } = useProduct();
	return (
		<div className="container-body">
			<div className="p-1">
				<h2 className="page-heading">Showing all products</h2>
				<div className="products-listing">
					{state.filteredItems.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
			<button className="filter-icon">
				<span className="material-icons"> filter_list </span>
			</button>
			<FilterSection />
		</div>
	);
}

export { Products };
