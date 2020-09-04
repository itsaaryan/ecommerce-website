import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {saveProduct,listProducts, deleteProduct} from "../actions/productActions";


function ProductsScreen(){
    const [modalVisible,setModalVisible]=useState(false);
    const [_id,setId]=useState(null);
    const [name,setName]=useState('');
    const [brand,setBrand]=useState('');
    const [price,setPrice]=useState(0);
    const [category,setCategory]=useState('');
    const [description,setDescription]=useState('');
    const [image,setImage]=useState('');
    const [countInStock,setcountInStock]=useState('');
    const productSave=useSelector(state => state.productSave);
    const productDelete=useSelector(state => state.productDelete);
    const {loading:loadingDelete,success:successDelete,error:errorDelete}=productDelete;
    const {loading:loadingSave,success:successSave,error:errorSave}=productSave;
    const dispatch=useDispatch();
    const productList=useSelector(state => state.productList);
    const {loading,products,error}=productList;
    useEffect(() => {
        if(successSave)
        {
            setModalVisible(false);
        }
        dispatch(listProducts());
        return () => {
            //
        }
    },[successSave,successDelete]);
    function openModal(product){
        setModalVisible(true);
        setId(product._id)
        setBrand(product.brand);
        setCategory(product.category);
        setDescription(product.description);
        setImage(product.description);
        setName(product.name);
        setPrice(product.price);
        setcountInStock(product.countInStock);
    }
    function delProduct(product){
        dispatch(deleteProduct(product._id));
    }
    function submitHandler(e){
      e.preventDefault();
      dispatch(saveProduct({_id,name,brand,price,category,description,image,countInStock}));
    }
    return <div className="content content-margined">
       <div className="product-header">
           <h3>Products</h3>
           <button className="button primary" onClick={() => openModal({})}>Create Product</button>
       </div>
      {modalVisible && <div className="form">
    <form onSubmit={submitHandler}>
  
         <ul className="form-container">
         <li><h2>Create New Product</h2></li>
         <li>
              {(loadingSave||loadingDelete) && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
         </li>
             <li>
                 <label htmlFor="name">Name</label>
                 <input value={name} type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} placeholder="Name of Product"></input>
             </li>
             <li>
                 <label htmlFor="name">Price</label>
                 <input value={price}  type="number" id="price" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="Price of Product"></input>
             </li>
             <li>
                 <label htmlFor="brand">Brand</label>
                 <input value={brand}  type="text" id="brand" name="brand" onChange={(e) => setBrand(e.target.value)} placeholder="Brand Name"></input>
             </li>
             <li>
                 <label htmlFor="count">Count In Stock</label>
                 <input value={countInStock}  type="number" id="count" name="count" onChange={(e) => setcountInStock(e.target.value)} placeholder="Count In Stock"></input>
             </li>
             <li>
                 <label htmlFor="category">Category</label>
                 <input value={category} type="text" id="category" name="category" onChange={(e) => setCategory(e.target.value)} placeholder="Category"></input>
             </li>
             <li>
                 <label htmlFor="Description">Description</label>
                 <input value={description} type="text" id="Description" name="Description" onChange={(e) => setDescription(e.target.value)} placeholder="Description"></input>
             </li>
             <li>
                 <label htmlFor="image">Image</label>
                 <input value={image}  type="text" id="image" name="image" onChange={(e) => setImage(e.target.value)} placeholder="Image URL"></input>
             </li>
             <li>
                 <button type="submit" className="button primary">{_id?"Update":"Create Product"}</button>
             </li>
             <li>
                 <button  className="button secondary" onClick={() => setModalVisible(false)}>Cancel</button>
             </li>
         </ul>
    </form>
    </div>}
       <div className="product-list">
           <table>
               <thead>
                   <tr>
                       <th>ID</th>
                       <th>Name</th>
                       <th>Price</th>
                       <th>Category</th>
                       <th>Brand</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
               {products.map(product => (<tr>
                   <td>{product._id}</td>
                   <td>{product.name}</td>
                   <td>{product.price}</td>
                   <td>{product.category}</td>
                   <td>{product.brand}</td>
                   <td>
                   &nbsp; &nbsp; &nbsp; &nbsp;
                       <button class="button button-secondary" onClick={() => openModal(product)}>Edit</button>
                       &nbsp; &nbsp;
                       <button class="button button-secondary" onClick={() => delProduct(product)}>Delete</button>
                   </td>
               </tr>))}
                   
               </tbody>
           </table>
       </div>

    </div>
}

export default ProductsScreen;