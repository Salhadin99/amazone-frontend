import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Products,
  Singleproduct,
  About,
  Cart,
  Error,
  Checkout,
  Private,
} from "./pages/Index";
import CartButtons from "./components/Cartbuttons";
import CartPage from "./pages/Cartpage";
import Login from "./components/Login";
import AddProductForm from "./components/AddProductForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Singleproduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/private" element={<Private />} />
        <Route path="/*" element={<Error />} />
        <Route path="/addproduct" element={<AddProductForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
