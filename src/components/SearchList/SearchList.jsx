import { useProduct } from "../../context/product-context";
import { itemListCalculation } from "../../utils/itemListCalculation";

function SearchList() {
	const { productState } = useProduct();
	return (
		<div className="search-list">
			{/* {productState.searchText !== "" && */}
			{itemListCalculation(productState)
				.filter((item, index) => index < 5)
				.map((item) => (
					<p className="search-item">{item.name}</p>
				))}
		</div>
	);
}

export { SearchList };
