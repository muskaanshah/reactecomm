function ProductCard() {
	return (
		<div className="card-product-wrapper">
			<div className="card card-product">
				<button className="btn-close">
					<span className="material-icons"> close </span>
				</button>
				<div className="card-image-wrapper">
					<img
						className="img-responsive"
						src="https://m.media-amazon.com/images/I/71qDTSDIN0L._SY355_.jpg"
						onclick="window.location = productpath"
					/>
				</div>
				<div
					className="card-product-details"
					onclick="window.location = productpath"
				>
					<h3 className="card-title">Codenames</h3>
					<p className="card-product-description">Multiplayer witty game</p>
					<div className="card-product-price pb-0">
						<span className="card-product-newprice">Rs.799</span>
						<span className="card-product-actualprice">Rs.1199</span>
						<span className="card-product-discount">30% off</span>
					</div>
				</div>
				<div className="card-button">
					<button className="btn btn-addtocart bg-primary ls-1 px-0-5 py-1">
						<span className="btn-addtocart-text">MOVE TO CART</span>
						<span className="material-icons-outlined btn-addtocart-icon">
							add_shopping_cart
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export { ProductCard };
