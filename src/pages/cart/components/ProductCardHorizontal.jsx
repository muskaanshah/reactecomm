function ProductCardHorizontal() {
	return (
		<div className="card-horizontal">
			<div className="card-image-wrapper">
				<img
					className="img-responsive cart-objectfit-cover"
					src="https://m.media-amazon.com/images/I/71qDTSDIN0L._SY355_.jpg"
				/>
			</div>
			<div className="card-product-details">
				<button className="btn-close">
					<span className="material-icons close-button"> close </span>
				</button>
				<h3 className="card-title">Codenames</h3>
				<p className="card-product-description">Based on team strategy</p>
				<div className="card-product-price">
					<span className="card-product-newprice">Rs.799</span>
					<span className="card-product-actualprice">Rs.1199</span>
					<span className="card-product-discount">30% off</span>
				</div>
				<div className="card-product-quantity">
					<span className="product-qty mr-0-5">Qty:</span>
					<button
						className="borderradius-2 btn-count border-accent bg-secondary"
						//   onClick={() => removeFromCart(id)}
					>
						-
					</button>
					<span className="mx-0-5">1</span>
					<button
						className="borderradius-2 btn-count border-accent bg-secondary"
						//   onClick={() => addToCart(id)}
					>
						+
					</button>
				</div>
				<p className="fs-0-8 pl-1 flex-end">
					<span className="material-icons color-success-dark fs-1">
						task_alt
					</span>
					Delivery by *date*
				</p>
			</div>
		</div>
	);
}

export { ProductCardHorizontal };
