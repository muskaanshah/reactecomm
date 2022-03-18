import { Navbar } from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Products } from "./pages/products/Products";
import { Wishlist } from "./pages/wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="wishlist" element={<Wishlist />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
