import React from "react";
import { useCart } from "../Store/StoreContext";

const Cart = () => {
    const { state, dispatch } = useCart();
    const { cart } = state;
    // function for Handling the Increment
  function handleIncrement(productId){
  dispatch({type:"Increment",payload:{id:productId}})
     toast.success("Incremented item to cart")
  }
    // function for Handling the decrement
  function handleDecrement(productId){
    dispatch({type:"Decrement",payload:{id:productId}})
     toast.success("decrement item ")
  }
    // function for Handling the Remove
    function handleRemove(productId){
      dispatch({type:"Remove_To cart",payload:{id:productId}})
      toast.success("Removed item to cart")
    }
    return (
      <div className="container">
        <div className="row my-4">
          {
            cart.length>0?(cart.map((item)=>(
              <div className="col-12 col-sm-12 col-md-3 col-lg-3 mt-2 ">
              <div className="card shadow p-3">
                <img src={item.image} class="card-img-top product-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</h5>
                  <p className="card-text fw-bold"><span >price : </span>{item.price*item.quantity}</p>
                  <p className="card-text fw-bold"><span >quantity : </span>{item.quantity}</p>
                  <button className="btn btn-outline-success" onClick={()=>handleIncrement(item.id)}>+</button>
                  <button className="btn btn-outline-warning mx-2" onClick={()=>handleDecrement(item.id)}>-</button>
                  <button className="btn btn-outline-danger" onClick={()=>handleRemove(item.id)}>🎒</button>
                </div>
              </div>
             
            </div>
            ))):(<h1>Cart Is Empty</h1>)
          }
        </div>
      </div>
  )
}

export default Cart
