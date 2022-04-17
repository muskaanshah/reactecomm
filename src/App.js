import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Mockman from "mockman-js";
import {
    Home,
    Products,
    Wishlist,
    Login,
    Signup,
    Cart,
    Checkout,
    SingleProduct,
    Logout,
    About,
    Contact,
    PageNotFound,
    UserProfile,
    OrderSummary,
} from "./pages";
import { Navbar } from "./components/Navbar/Navbar";
import { Alert } from "./components/Alert/Alert";
import { RequiresAuth, NotRequiresAuth } from "./utils/RequiresAuth";

function App() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="App">
            <Navbar />
            <Alert />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route
                    path="/wishlist"
                    element={
                        <RequiresAuth>
                            <Wishlist />
                        </RequiresAuth>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <NotRequiresAuth>
                            <Login />
                        </NotRequiresAuth>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <NotRequiresAuth>
                            <Signup />
                        </NotRequiresAuth>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <RequiresAuth>
                            <Cart />
                        </RequiresAuth>
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <RequiresAuth>
                            <Checkout />
                        </RequiresAuth>
                    }
                />
                <Route path="/mock" element={<Mockman />} />
                <Route path="/product/:productId" element={<SingleProduct />} />
                <Route
                    path="/logout"
                    element={
                        <RequiresAuth>
                            <Logout />
                        </RequiresAuth>
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/userprofile"
                    element={
                        <RequiresAuth>
                            <UserProfile />
                        </RequiresAuth>
                    }
                />
                <Route
                    path="/order"
                    element={
                        <RequiresAuth>
                            <OrderSummary />
                        </RequiresAuth>
                    }
                />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
