import React from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen(){
  const productList=useSelector(state =>  state.productList);
  const {loading,products,error}=productList;
  const dispatch=useDispatch();
  React.useEffect(()=>{
    dispatch(listProducts());
    return () => {
      //
    };
  },[])
  return(
    loading?<div>loading...</div>:
    error?<div>{error}</div>:
    <ul class="products">
    {
      products.map(product => {
      return (
        <li key={product.id }>
            <div calss="product">
            <Link to={"/products/"+product.id}><img calss="product-img" src={product.img} alt={product.name}/></Link>
            <div class="product-name"><Link to={"/products/"+product.id}>{product.name}</Link></div>
            <div class="product-brand">{product.brand}</div>
            <div class="product-price">${product.price}</div>
            <div class="product-rating">{product.rating} ({product.review} reviews)</div>
            </div>
        </li>
      );
    })}

    </ul>

  );
}
export default HomeScreen;
