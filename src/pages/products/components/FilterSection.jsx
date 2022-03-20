import axios from "axios";
import { useEffect, useState } from "react";
import { useProduct } from "../../../context/product-context";

function FilterSection() {
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/categories");
				setCategories(res.data.categories);
				console.log("Categories", categories);
			} catch (error) {
				console.log("Error", error);
			}
		})();
	}, []);

	const { state, dispatch } = useProduct();
	const [categories, setCategories] = useState([]);
	const categoryDispatch = (e) => {
		if (e.target.checked) {
			dispatch({
				type: "CATEGORIES",
				payload: {
					value: e.target.value,
					isChecked: true,
				},
			});
		} else {
			dispatch({
				type: "CATEGORIES",
				payload: {
					value: e.target.value,
					isChecked: false,
				},
			});
		}
	};
	return (
		<div className="products-filters pb-2" data-visible="false">
			<div className="px-1">
				<div className="products-filters-heading">
					<h3>Filters</h3>
					<button
						className="btn-clear fs-1"
						onClick={() =>
							dispatch({
								type: "CLEAR",
							})
						}
					>
						Clear
					</button>
				</div>
				<h3>Price</h3>
				<div className="slider-range-price">
					<span>400</span>
					<span>5000+</span>
				</div>
				<div className="slider-container">
					<input
						type="range"
						className="slider"
						min="400"
						max="5000"
						value={state.priceRange}
						onChange={(e) => {
							dispatch({
								type: "PRICE",
								payload: { value: Number(e.target.value) },
							});
						}}
					/>
				</div>
				<h3>Category</h3>
				<div className="checkbox-group category-filter">
					{categories.map((currentCategory) => {
						return (
							<label>
								<input
									type="checkbox"
									name="checkbox"
									value={currentCategory.categoryName}
									checked={state.categories.includes(
										currentCategory.categoryName
									)}
									onChange={(e) => categoryDispatch(e)}
								/>
								{currentCategory.categoryName}
							</label>
						);
					})}
				</div>
				<h3>Rating</h3>
				<div className="radio-group rating-filter">
					<label htmlFor="4stars">
						<input
							id="4stars"
							type="radio"
							name="radio-rating"
							value="4"
							onChange={(e) =>
								dispatch({ type: "RATING", payload: { value: e.target.value } })
							}
							checked={state.rating === "4"}
						/>
						4 stars and above
					</label>
					<label htmlFor="3stars">
						<input
							id="3stars"
							type="radio"
							name="radio-rating"
							value="3"
							onChange={(e) =>
								dispatch({ type: "RATING", payload: { value: e.target.value } })
							}
							checked={state.rating === "3"}
						/>
						3 stars and above
					</label>
					<label htmlFor="2stars">
						<input
							id="2stars"
							type="radio"
							name="radio-rating"
							value="2"
							onChange={(e) =>
								dispatch({ type: "RATING", payload: { value: e.target.value } })
							}
							checked={state.rating === "2"}
						/>
						2 stars and above
					</label>
					<label htmlFor="1star">
						<input
							id="1star"
							type="radio"
							name="radio-rating"
							value="1"
							onChange={(e) =>
								dispatch({ type: "RATING", payload: { value: e.target.value } })
							}
							checked={state.rating === "1"}
						/>
						1 star and above
					</label>
				</div>
				<h3>Sort By</h3>
				<div className="radio-group sortby-filter">
					<label htmlFor="htol">
						<input
							id="htol"
							type="radio"
							name="radio-price"
							value="HIGHEST_TO_LOWEST"
							onChange={(e) =>
								dispatch({
									type: "SORT_BY_PRICE",
									payload: { value: e.target.value },
								})
							}
							checked={state.sortWay === "HIGHEST_TO_LOWEST"}
						/>
						Price - High to Low
					</label>
					<label htmlFor="ltoh">
						<input
							id="ltoh"
							type="radio"
							name="radio-price"
							value="LOWEST_TO_HIGHEST"
							onChange={(e) =>
								dispatch({
									type: "SORT_BY_PRICE",
									payload: { value: e.target.value },
								})
							}
							checked={state.priceRange === "LOWEST_TO_HIGHEST"}
						/>
						Price - Low to High
					</label>
				</div>
			</div>
		</div>
	);
}

export { FilterSection };
