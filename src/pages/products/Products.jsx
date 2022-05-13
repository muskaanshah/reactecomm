import { useState } from "react";
import { useAlert, useProduct } from "../../context";
import { ProductCard } from "./components/ProductCard";
import { FilterSection } from "./components/FilterSection";
import "../products.css";
import "../loader.css";

function Products() {
    const { productState } = useProduct();
    const { alertState } = useAlert();
    const [filterDrawer, setFilterDrawer] = useState(true);
    return (
        <div className="container-body">
            {alertState.productLoader ? (
                <div className="loader-wrapper centered">
                    <div className="loader">Loading...</div>
                </div>
            ) : (
                <>
                    <div className="p-1">
                        <h2 className="page-heading">
                            Showing all products{" "}
                            <span className="fs-0-8">
                                {`(${productState.filteredItems.length} ${
                                    productState.filteredItems.length === 1
                                        ? "product)"
                                        : "products)"
                                }`}
                            </span>
                        </h2>

                        <div className="products-listing">
                            {productState.filteredItems.length > 0 ? (
                                productState.filteredItems.map((product) => (
                                    <ProductCard key={product._id} product={product} />
                                ))
                            ) : (
                                <div className="centered">
                                    <h3>No products to show for the selected filters</h3>
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        className="filter-icon"
                        onClick={() => setFilterDrawer((prev) => !prev)}
                    >
                        <span className="material-icons"> filter_list </span>
                    </button>
                    <FilterSection
                        filterDrawer={filterDrawer}
                        setFilterDrawer={setFilterDrawer}
                    />
                </>
            )}
        </div>
    );
}

export { Products };
