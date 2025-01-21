import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import './App.css'

import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import About from './Pages/About';
import Shop from './Pages/Shop';
import ProductNotFound from './Pages/ProductNotFound';
import ProductDetails from './Pages/ProductDetails';
import Cart from './components/Cart';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className='container'>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ProductNotFound />} />
    </Routes>
    </div>
   
    </>
  )
}

export default App
