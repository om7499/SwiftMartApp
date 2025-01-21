import React from 'react'
import { NavLink } from 'react-router-dom'
 import logo from '../assets/logo.avif'

const Navbar = () => {
  return (
    <>
    <div className="border p-2 shadow-lg">
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container">
    <NavLink className="navbar-brand d-flex align-items-center" to={"/"}>
      <img 
        src={logo}
        className="rounded-circle me-2" 
        style={{ width: "30px", height: "30px", objectFit: "cover" }} 
        alt="logo" 
      />
      <span className='fw-bold'style={{color:"#020f5f"}}>SwiftMart </span>   
    </NavLink>
      {/* Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Navbar */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navigation Links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink className="nav-link" to={"/"}>
            Home
          </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/shop"}>
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/about"}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Search Form */}
        <form className="d-flex me-3">
          <input
            className="form-control me-2 " 
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>

        {/* Cart Icon */}
  
            <NavLink className="nav-link text-xl" to={"/cart"}>
           <span className='fs-3'> <i className="bi bi-cart4"></i></span>
            </NavLink>
          
      </div>
    </div>
  </nav>
</div>

</>
  )
}

export default Navbar