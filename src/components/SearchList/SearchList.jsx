import { useProduct } from "../../context/product-context";

function SearchList() {
	const { productState } = useProduct();
	const itemStartsWith = productState.default.filter((item) =>
		item.name.toLowerCase().startsWith(productState.searchText.toLowerCase())
	);
	const itemIncludes = productState.default.filter((item) =>
		item.name.toLowerCase().includes(productState.searchText.toLowerCase())
	);
	const itemIncludesNotInStartsWith = itemIncludes.reduce((acc, curr) => {
		const itemAlreadyPresent = itemStartsWith.find(
			(curItem) => curItem._id === curr._id
		);
		return itemAlreadyPresent ? acc : [...acc, curr];
	}, []);
	const finalItemList = itemStartsWith.concat(itemIncludesNotInStartsWith);
	return (
		<div className="search-list">
			{/* {productState.searchText !== "" && */}
			{finalItemList
				.filter((item, index) => index < 5)
				.map((item) => (
					<p className="search-item">{item.name}</p>
				))}
		</div>
	);
}

export { SearchList };
