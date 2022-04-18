import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../context";
import { GameCard } from "./components/Gamecard";
import axios from "axios";
import "./home.css";

function Home() {
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get("/api/categories");
				setCategories(res.data.categories);
			} catch (error) {
				console.error("error", error);
			}
		})();
	});
	const [categories, setCategories] = useState([]);
	const { productDispatch } = useProduct();
	return (
		<div className="container-body">
			<div className="landingpage">
				<picture>
					<source
						media="(min-width: 1000px)"
						srcSet="https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541607/e-commerce/landingpagedesktop_hta9tn.jpg"
					/>
					<img
						src="https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541607/e-commerce/landingpage_gobzt1.jpg"
						className="img-responsive"
						alt="landingpage"
					/>
				</picture>
			</div>
			<h1>Categories</h1>
			<div className="categories mx-auto">
				{categories.map((category) => {
					return (
						<Link
							to="/products"
							key={category._id}
							onClick={() =>
								productDispatch({
									type: "CATEGORIES",
									payload: {
										value: category.categoryName,
										isChecked: true,
									},
								})
							}
						>
							<GameCard category={category} />
						</Link>
					);
				})}
			</div>
			<div className="homepagequote mx-auto">
				<p className="homequote mb-0 fs-1-25 fw-400">
					<i>
						"By playing games you can artificially speed up your learning curve
						to develop the right kind of thought process"
					</i>
				</p>
				<p className="homequoteauthor fs-1-25 fw-500 mt-0">-Nate Silver</p>
			</div>
		</div>
	);
}

export { Home };
