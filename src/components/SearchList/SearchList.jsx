import { Link } from "react-router-dom";
import { useProduct } from "../../context";
import { itemListCalculation } from "../../utils/itemListCalculation";
import { Highlight } from "./Highlight";

function SearchList() {
    const { productState } = useProduct();
    return (
        <div className="search-list">
            {productState.searchText !== "" && (
                <>
                    {itemListCalculation(productState).length > 0 ? (
                        itemListCalculation(productState)
                            .filter((_, index) => index < 5) // _ because item not used
                            .map((item) => (
                                <Link
                                    style={{
                                        color: "inherit",
                                        textDecoration: "inherit",
                                    }}
                                    to={`/product/${item._id}`}
                                >
                                    <p className="search-item">
                                        <Highlight
                                            text={item.name}
                                            highlight={productState.searchText}
                                        />
                                    </p>
                                </Link>
                            ))
                    ) : (
                        <div className="search-item">No items found</div>
                    )}
                </>
            )}
        </div>
    );
}

export { SearchList };
