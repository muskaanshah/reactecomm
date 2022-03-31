import { useProduct } from "../../context/product-context";
import { itemListCalculation } from "../../utils/itemListCalculation";

function SearchList() {
	const { productState } = useProduct();
	return (
		<div className="search-list">
			{productState.searchText !== "" &&
				itemListCalculation(productState)
					.filter((_, index) => index < 5) // _ because item not used
					.map((item) => <p className="search-item">{item.name}</p>)}
		</div>
	);
}

export { SearchList };
