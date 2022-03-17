import { Navbar } from "./components/Navbar/Navbar"
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
