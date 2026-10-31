import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import axios from 'axios';
import Checkout from "./pages/Checkout";
import CreateProuduct from "./pages/CreateProduct";
function App() {
// Set globally for all requests
axios.defaults.withCredentials = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<CreateProuduct />} />
      </Routes>
    </>
  );
}

export default App;
