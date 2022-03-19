import { useProduct } from "../../../context/product-context";

function FilterSection() {
	const { state, dispatch } = useProduct();
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
					<label htmlFor="checkbox-strategicgames">
						<input
							id="checkbox-strategicgames"
							type="checkbox"
							name="checkbox"
							value="STRATEGIC_GAMES"
							onChange={(e) => {
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
							}}
						/>
						Strategic games
					</label>
					<label htmlFor="checkbox-fungames">
						<input
							id="checkbox-fungames"
							type="checkbox"
							name="checkbox"
							value="FUN_GAMES"
							onChange={(e) => {
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
							}}
						/>
						Fun games
					</label>
					<label htmlFor="checkbox-multiplayergames">
						<input
							id="checkbox-multiplayergames"
							type="checkbox"
							name="checkbox"
							value="MULTIPLAYER_GAMES"
							onChange={(e) => {
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
							}}
						/>
						Multiplayer games
					</label>
					<label htmlFor="checkbox-twoplayergames">
						<input
							id="checkbox-twoplayergames"
							type="checkbox"
							name="checkbox"
							value="TWOPLAYER_GAMES"
							onChange={(e) => {
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
							}}
						/>
						Two player games
					</label>
					<label htmlFor="checkbox-cardgames">
						<input
							id="checkbox-cardgames"
							type="checkbox"
							name="checkbox"
							value="CARD_GAMES"
							onChange={(e) => {
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
							}}
						/>
						Card games
					</label>
					<label htmlFor="checkbox-childrengames">
						<input
							id="checkbox-childrengames"
							type="checkbox"
							name="checkbox"
							value="CHILDREN_GAMES"
							onChange={(e) => {
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
							}}
						/>
						Games for children
					</label>
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
						/>
						Price - Low to High
					</label>
				</div>
			</div>
		</div>
	);
}

export { FilterSection };
