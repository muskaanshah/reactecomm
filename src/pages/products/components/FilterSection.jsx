import { useEffect, useState } from "react";
import { useProduct } from "../../../context";
import axios from "axios";

function FilterSection({ filterDrawer, setFilterDrawer }) {
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/categories");
				setCategories(res.data.categories);
			} catch (error) {
				console.error("Error", error);
			}
		})();
	}, []);

	const { productState, productDispatch } = useProduct();
	const [categories, setCategories] = useState([]);
	return (
		<div
			className={`products-filters pb-2 ${
				filterDrawer && `products-filters-open`
			}`}
		>
			<div className="px-1">
				<div className="products-filters-heading">
					<h3>Filters</h3>
					<button
						className="btn-clear fs-1"
						onClick={() =>
							productDispatch({
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
						step="200"
						value={productState.priceRange}
						onChange={(e) => {
							productDispatch({
								type: "PRICE",
								payload: { value: Number(e.target.value) },
							});
						}}
					/>
					<span className="pt-0-5" style={{ textAlign: "center" }}>
						Products within Rs.
						<span className="fw-600">{productState.priceRange}</span>
					</span>
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
								productDispatch({
									type: "SORT_BY_PRICE",
									payload: { value: e.target.value },
								})
							}
							checked={productState.sortWay === "HIGHEST_TO_LOWEST"}
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
								productDispatch({
									type: "SORT_BY_PRICE",
									payload: { value: e.target.value },
								})
							}
							checked={productState.sortWay === "LOWEST_TO_HIGHEST"}
						/>
						Price - Low to High
					</label>
				</div>
				<h3>Category</h3>
				<div className="checkbox-group category-filter">
					{categories.map((currentCategory) => {
						return (
							<label key={currentCategory._id}>
								<input
									type="checkbox"
									name="checkbox"
									className="category-checkbox"
									value={currentCategory.categoryName}
									checked={productState.categories.includes(
										currentCategory.categoryName
									)}
									onChange={(e) => {
										if (e.target.checked) {
											productDispatch({
												type: "CATEGORIES",
												payload: {
													value: e.target.value,
													isChecked: true,
												},
											});
										} else {
											productDispatch({
												type: "CATEGORIES",
												payload: {
													value: e.target.value,
													isChecked: false,
												},
											});
										}
									}}
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
								productDispatch({
									type: "RATING",
									payload: { value: e.target.value },
								})
							}
							checked={productState.rating === "4"}
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
								productDispatch({
									type: "RATING",
									payload: { value: e.target.value },
								})
							}
							checked={productState.rating === "3"}
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
								productDispatch({
									type: "RATING",
									payload: { value: e.target.value },
								})
							}
							checked={productState.rating === "2"}
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
								productDispatch({
									type: "RATING",
									payload: { value: e.target.value },
								})
							}
							checked={productState.rating === "1"}
						/>
						1 star and above
					</label>
				</div>
			</div>
		</div>
	);
}

export { FilterSection };
