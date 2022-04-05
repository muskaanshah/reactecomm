import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Mockman from "mockman-js";
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Login } from "./pages/authentication/Login";
import { Signup } from "./pages/authentication/Signup";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { SingleProduct } from "./pages/singleproduct/SingleProduct";
import { Logout } from "./pages/logout/Logout";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { PageNotFound } from "./pages/notfound/PageNotFound";
import { UserProfile } from "./pages/userProfile/UserProfile";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mock" element={<Mockman />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
