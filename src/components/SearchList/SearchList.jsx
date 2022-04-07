import { Link } from "react-router-dom";
import { useProduct } from "../../context";
import { itemListCalculation } from "../../utils/itemListCalculation";

function SearchList() {
	const { productState } = useProduct();
	return (
		<div className="search-list">
			{productState.searchText !== "" &&
				itemListCalculation(productState)
					.filter((_, index) => index < 5) // _ because item not used
					.map((item) => (
						<Link
							style={{ color: "inherit", textDecoration: "inherit" }}
							to={`/product/${item._id}`}
						>
							<p className="search-item">{item.name}</p>
						</Link>
					))}
		</div>
	);
}

export { SearchList };
