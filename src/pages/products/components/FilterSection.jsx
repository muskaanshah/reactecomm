function FilterSection() {
	return (
		<div className="products-filters pb-2" data-visible="false">
			<div className="px-1">
				<div className="products-filters-heading">
					<h3>Filters</h3>
					<button className="btn-clear fs-1">Clear</button>
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
						value="10000"
						id="priceRange"
					/>
				</div>
				<h3>Category</h3>
				<div className="checkbox-group category-filter">
					<label for="checkbox-strategicgames">
						<input
							id="checkbox-strategicgames"
							type="checkbox"
							name="checkbox"
							value="strategic games"
							checked
						/>
						Strategic games
					</label>
					<label for="checkbox-fungames">
						<input
							id="checkbox-fungames"
							type="checkbox"
							name="checkbox"
							value="fun games"
						/>
						Fun games
					</label>
					<label for="checkbox-multiplayergames">
						<input
							id="checkbox-multiplayergames"
							type="checkbox"
							name="checkbox"
							value="multiplayer games"
						/>
						Multiplayer games
					</label>
					<label for="checkbox-twoplayergames">
						<input
							id="checkbox-twoplayergames"
							type="checkbox"
							name="checkbox"
							value="two player games"
						/>
						Two player games
					</label>
					<label for="checkbox-cardgames">
						<input
							id="checkbox-cardgames"
							type="checkbox"
							name="checkbox"
							value="card games"
						/>
						Card games
					</label>
					<label for="checkbox-childrengames">
						<input
							id="checkbox-childrengames"
							type="checkbox"
							name="checkbox"
							value="children games"
						/>
						Games for children
					</label>
				</div>
				<h3>Rating</h3>
				<div className="radio-group rating-filter">
					<label for="4stars">
						<input
							id="4stars"
							type="radio"
							name="radio-rating"
							value="4 stars"
						/>
						4 stars and above
					</label>
					<label for="3stars">
						<input
							id="3stars"
							type="radio"
							name="radio-rating"
							value="3 stars"
						/>
						3 stars and above
					</label>
					<label for="2stars">
						<input
							id="2stars"
							type="radio"
							name="radio-rating"
							value="2 stars"
						/>
						2 stars and above
					</label>
					<label for="1star">
						<input id="1star" type="radio" name="radio-rating" value="1 star" />
						1 star and above
					</label>
				</div>
				<h3>Sort By</h3>
				<div className="radio-group sortby-filter">
					<label for="htol">
						<input
							id="htol"
							type="radio"
							name="radio-price"
							value="highest to lowest"
						/>
						Price - High to Low
					</label>
					<label for="ltoh">
						<input
							id="ltoh"
							type="radio"
							name="radio-price"
							value="lowest to highest"
						/>
						Price - Low to High
					</label>
				</div>
			</div>
		</div>
	);
}

export { FilterSection };
