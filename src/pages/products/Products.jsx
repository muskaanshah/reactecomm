import "../products.css";
import { ProductCard } from "./components/ProductCard";
import { FilterSection } from "./components/FilterSection";

function Products() {
	return (
		<div className="container-body">
			<div className="p-1">
				<h2 className="page-heading">Showing all products</h2>
				<div className="products-listing">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
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
