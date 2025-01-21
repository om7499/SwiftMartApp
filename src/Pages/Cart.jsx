import React from 'react'
import { useCart } from './Store/StoreContext'
const Cart = () => {
    const [state,dispatch]=useCart()
    const {cart}=state
    // function crud opration
    function handelIncrement(productId){
     dispatch({type:"Increment",payload:productId})
          toast.success("increment item to cart")
    }
    function handelDecrement(productId){
        dispatch({type:"Decreiment",payload:productId})
        toast.success("Decrement item to cart")
    }
    function handelDelete(productId){
        dispatch({type:"Remooove",payload:productId})
        toast.success("Removed item to cart")
    }


  return (
    <div className='container'>
      <div className="row">
        {
            cart.length>0?(cart.map((item)=>(
                <div className='col-lg-3 col-sm-12 col-md-6 w-[300px] h-[300px]'>
                <div className=' py-3 border shadow-lg'>
                <img src={item.image} className="card-img-top product-img " alt="..."/>
                    <div className="card-body w-100 p-3">
                        <h3>{item.title}</h3>
                        <h5 className="card-title">{item.catrdtitle}</h5>
                        <h1>{item.price *item.quantity} $</h1>    
                        <button className='btn btn-outline-success'onClick={()=>handelIncrement(item.id)}>➕</button>
                        <button className='btn btn-outline-warnibg'onClick={()=>handelDecrement(item.id)}>➖</button>
                        <button className='btn btn-outline-success'onClick={()=>handelDelete(item.id)}>❌</button>
                      </div>
                    </div>
                </div>  
            ))):(<h1>Cart is empty</h1>)
        }
      </div>
    </div>
  )
}

export default Cart
