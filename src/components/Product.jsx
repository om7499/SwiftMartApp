import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Store/StoreContext'
import { toast } from 'react-toastify'
// productCard section

const Product = ({product}) => {

  //console.log(product)
  const {id,image,title,price,rating:{count,rate},category,description}=product

   let catrdtitle = title.length<=50?title:title.slice(0,50);
   
    let {dispatch}=useCart()

    function handelAddtocart(product){
     console.log(product)
     dispatch({type:"Add_To cart",payload:product})
     toast.success("added item to cart")
    }

  return (
    <div className='col-lg-3 col-sm-12 col-md-6 w-[300px] h-[300px] my-2'>

      <div className=' py-3 border category rounded-3 shadow-lg'>
      <Link to={`/shop/${id}`} className='nav-link'> 
      <img src={image} className="card-img-top product-img p-3 rounded-3" alt="..."/>
          <div className="card-body w-100 p-3">
              <h5 className="card-title"> {catrdtitle.length > 20 ? `${catrdtitle.substring(0, 20)}...` : catrdtitle}</h5>
              <h1>{price} $</h1>    
            </div>
      </Link>
            <div className='m-2 '> <button onClick={()=>{handelAddtocart(product)}} className='btn btn-primary w-full p-2'>Add to cart</button></div>
          </div>
      </div>
     
   
  )
}

export default Product
