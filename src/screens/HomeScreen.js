import React from 'react';
import {Link} from "react-router-dom";
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
    <ul className="products">
    {
      products.map(product => {
      return (
        <li key={product._id }>
            <div className="product">
            <Link to={"/products/"+product._id}><img className="product-img" src={product.image} alt={product.name}/></Link>
            <div className="product-name"><Link to={"/products/"+product._id}>{product.name}</Link></div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} ({product.review} reviews)</div>
            </div>
        </li>
      );
    })}

    </ul>

  );
}
export default HomeScreen;
