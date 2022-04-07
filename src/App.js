import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Mockman from "mockman-js";
import { Home, Products, Wishlist, Login, Signup, Cart, Checkout, SingleProduct, Logout, About, Contact, PageNotFound, UserProfile, OrderSummary } from "./pages";
import { Navbar } from "./components/Navbar/Navbar"
import { Alert } from "./components/Alert/Alert";

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
        <Route path="/order" element={<OrderSummary />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
