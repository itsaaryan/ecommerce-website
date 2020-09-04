import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
function ProductScreen(props){
  const [qty,setQty]=useState(1);
  const productDetails=useSelector(state => state.productDetails);
  const {product,loading,error} =productDetails;
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  },[])
  function handleAddToCArtClick(){
    props.history.push("/cart/"+props.match.params.id+"?qty="+qty);
  }
  return(
    <div>
    <div class="back-to-home">
   <Link to="/">Back to Home</Link>
    </div>
    {  loading?<div>Loading...</div>:
    error?<div>{error}</div>:
    <div className="details">
    <div className="details-image"><img src={product.image} alt={product.name} /></div>
    <div className="details-info">
       <ul>
       <li><h4>{product.name}</h4></li>
       <li>{product.rating} ({product.reviews} reviews)</li>
       <li>Price:<b>${product.price}</b></li>
       <li>{product.description}</li>
       </ul>
    </div>
<div class="details-action">
<ul>
<li>Price: ${product.price}</li>
<li >Status: <div style={{color:product.countItems===0?"red":"green",display:"inline-block"}}>{product.countItems===0?"Out Of Stock":"In Stock"}</div></li>
{product.countItems===0? "" :<div><li>
Qty: <select value={qty} onChange={(event) => setQty(event.target.value) }>
{[...Array(product.countInStock).keys()].map(x =>
<option key={x+1} value={x+1}>{x+1}</option>
)}
</select>
</li>
<li><button onClick={handleAddToCArtClick} className="add-to-cart-button primary">Add to Cart</button></li></div>}
</ul>
</div>
    </div>
    }
    </div>
    );
}
export default ProductScreen;
