import React from "react";
import { NavLink } from "react-router-dom";
import headphones from '../assets/headphones.avif'
import Smartphone from '../assets/Smartphone.avif'
import Blender from '../assets/Blender.avif'
import Novel from '../assets/Novel.avif'



// Mock Data
const categories = ["Electronics", "Fashion", "Home Appliances", "Books", "Toys","Groceries"];
const featuredProducts = [
  { id: 1, name: "Smartphone", price: 299, image:Smartphone },
  { id: 2, name: "Headphones", price: 59, image: headphones },
  { id: 3, name: "Blender", price: 89, image:Blender},
  { id: 4, name: "Novel", price: 19, image:Novel },
];

const Home = () => {
  return (
    <>
    <div>
      {/* Hero Section */}
      <div className=" shadow-lg mt-2 text-center  py-5 hero-bg"style={{color:"#020f5f",border:"1px solid #020f5f"}}>
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to SwiftMart</h1>
          <p className="lead">Your one-stop-shop for all your needs.</p>
          <NavLink to={"/shop"} className="btn btn-outline-primary fw-bold btn-lg mt-3">
            Shop Now
          </NavLink>
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4"style={{color:"#020f5f"}}>Shop by Categories</h2>
          <div className="row">
            {categories.map((category, index) => (
              <div key={index} className="col-sm-6 col-md-4 col-lg-2 mb-3 ">
                <div className="card category p-3 h-100  shadow-sm ">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{category}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-5 shadow-lg ">
        <div className="container text-center">
          <h2 className="mb-4"style={{color:"#020f5f"}}>Featured Products</h2>
          <div className="row">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                <div className="card category shadow-sm h-100">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <NavLink to={"/"} className="btn btn-primary">
                      Add to Cart
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    
    </>

  )
}

export default Home
