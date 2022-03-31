import { Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="mock" element={<Mockman />} />
        <Route path="sp" element={<SingleProduct />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
