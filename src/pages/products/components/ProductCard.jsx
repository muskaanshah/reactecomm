function ProductCard({
	product: { id, url, name, description, newprice, actualprice, rating },
}) {
	let discount = Math.floor(((actualprice - newprice) * 100) / actualprice);
	return (
		<div className="card-product-wrapper">
			<div className="card card-product">
				<div className="card-image-wrapper">
					<img className="img-responsive" src={url} />
				</div>
				<div className="card-product-details">
					<button className="card-product-favourite">
						<span className="material-icons"> favorite </span>
					</button>
					<h3 className="card-title">{name}</h3>
					<p className="card-product-description">{description}</p>
					<div className="card-product-price pb-0">
						<span className="card-product-newprice">Rs.{newprice}</span>
						<span className="card-product-actualprice">Rs.{actualprice}</span>
						<span className="card-product-discount">{discount}% off</span>
					</div>
				</div>
				<div className="card-button">
					<button className="btn btn-addtocart bg-primary ls-1 px-0-5 py-1">
						<span className="btn-addtocart-text">ADD TO CART</span>
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
