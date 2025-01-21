
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Store/StoreContext.jsx';
import App from './App.jsx'

import './index.css'
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  
  <>
    <CartProvider>
    <BrowserRouter basename="/SwiftMartApp">
    <Navbar/>
       <App />
       <Footer/>
    <ToastContainer/>
    </BrowserRouter>
    </CartProvider>
    
    
   
  </>
 
)
