import "../products.css";
import { ProductCard } from "./components/ProductCard";
import { FilterSection } from "./components/FilterSection";
import { useProduct } from "../../context/product-context";
import { useState } from "react";

function Products() {
	const { productState } = useProduct();
	const [filterDrawer, setFilterDrawer] = useState(true);
	return (
		<div className="container-body">
			<div className="p-1">
				<h2 className="page-heading">Showing all products</h2>
				<div className="products-listing">
					{productState.filteredItems.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</div>
			<button
				className="filter-icon"
				onClick={() => setFilterDrawer((prev) => !prev)}
			>
				<span className="material-icons"> filter_list </span>
			</button>
			<FilterSection
				filterDrawer={filterDrawer}
				setFilterDrawer={setFilterDrawer}
			/>
		</div>
	);
}

export { Products };
