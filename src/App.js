import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Products, Singleproduct, About, Cart,  Error, Checkout, Private } from './pages/Index';
import CartButtons from './components/Cartbuttons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
        <Routes>
            <Route  path = "/" element={<Home />}/>
            <Route  path = "/about" element={<About />}/>
            <Route  path = "/cart" element={<CartButtons />}/>
            <Route  path = "/products" element={<Products />}/>
            <Route  path = "/products/:id" element={<Singleproduct />}/>
            <Route  path = "/checkout" element={<Checkout />}/>
            <Route  path = "/private" element={<Private />}/>
            <Route  path = "/*" element={<Error />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
