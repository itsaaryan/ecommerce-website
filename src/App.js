import React from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

function App() {
  function openmenu(){
    document.querySelector(".sidebar").classList.add("open");
  }
  function closemenu(){
    document.querySelector(".sidebar").classList.remove("open");
  }
  const userSignin=useSelector(state => state.userSignin);
  const {userInfo}=userSignin;
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
    <div className="brand">
    <button onClick={openmenu}>
     &#9776;
    </button>
    <Link to="/">ecomm</Link></div>
    <div className="header-links">
    <Link to="/wishlist">Wishlist</Link>
    <Link to="/cart">Cart</Link>
    {userInfo?<Link to="/profile">{userInfo.name}</Link>:<Link to="/signin">Sign In</Link>}
    </div>
    </header>
   <aside className="sidebar">
   <button className="aside-button" onClick={closemenu}>x</button>
   <h3>Shopping Categories</h3>
   <ul>
        <li>
        <a href="index.html">Pants</a>
        </li>
        <li>
        <a href="index.html">Shirts</a>
        </li>
   </ul>
   </aside>
    <main className="main">
    <div className="content">
    <Route path="/" exact={true} component={HomeScreen} />
    <Route path="/cart/:id?" component={CartScreen} />
    <Route path="/products/:id" exact={true} component={ProductScreen} />
    <Route path="/signin" exact={true} component={SignInScreen} />
    <Route path="/register" exact={true} component={RegisterScreen} />
    <Route path="/products" exact={true} component={ProductsScreen} />
    <Route path="/shipping" exact={true} component={ShippingScreen}/>
    <Route path="/payment" exact={true} component={PaymentScreen} />
    <Route path="/placeorder" exact={true} component={PlaceOrderScreen} />
    </div>

    </main>
    <footer className="footer">
    All rights reserved.
    </footer>
    </div>
</BrowserRouter>
  );
}

export default App;
