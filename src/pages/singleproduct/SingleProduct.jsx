import "./singleproduct.css";

function SingleProduct() {
	return (
		<div className="container-body">
			<div className="individual-product">
				<div className="centered">
					<div className="individual-productimg">
						<img
							className="img-responsive"
							src="https://m.media-amazon.com/images/I/71qDTSDIN0L._SY355_.jpg"
							alt="gameimage"
						/>
					</div>
				</div>
				<div className="card-product-details px-1">
					<div className="card-product-single">
						<div>
							<h3 className="card-title fs-2 fw-600 px-0">Codenames</h3>
							<p className="card-product-description fs-1-25 px-0">
								Multiplayer witty game
							</p>
							<div className="card-product-price p-0">
								<span className="card-product-newprice fs-1-25 fw-600">
									₹799
								</span>
								<span className="card-product-actualprice fs-1">₹1199</span>
								<span className="card-product-discount fs-1">30% off</span>
							</div>
							<span className="color-success-dark fs-0-8">
								Inclusive of all taxes
							</span>
							<p className="color-grey-dark fs-0-9 my-0">
								<b className="color-danger">Hurry!</b> Only a few peices left
							</p>
						</div>
						<div className="product-rating mt-1">
							<span>4.5</span>
							<span className="material-icons star-icon"> star </span>
							<span> | </span>
							<span>323 Ratings</span>
						</div>
					</div>
					<div className="button-block my-1">
						<button className="btn bg-primary btn-transform color-white ls-1 px-0-5 py-1">
							<span className="material-icons-outlined">
								{" "}
								add_shopping_cart{" "}
							</span>
							<span>ADD TO CART</span>
						</button>
						<button className="btn btn-primary-outline btn-transform color-primary bg-white ls-1 px-0-5 py-1">
							<span className="material-icons-outlined"> favorite_border </span>
							<span>WISHLIST</span>
						</button>
					</div>
					<h4>Product Details</h4>
					<p className="para-max650">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<h4>Ratings and Reviews</h4>
					<div>
						<input
							type="text"
							className="input-text input-text-review mr-1"
							placeholder="Write your review"
							id="#"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export { SingleProduct };
