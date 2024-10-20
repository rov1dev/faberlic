import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import Busket from "./components/Busket";
import Catalog from "./pages/Catalog";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/katalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/busket" element={<Busket />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
