import React from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from './screens/CartScreen';
import SignInScreen from './screens/SignInScreen';
import { useSelector } from 'react-redux';

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
    <div class="grid-container">
    <header class="header">
    <div class="brand">
    <button onClick={openmenu}>
     &#9776;
    </button>
    <Link to="/">ecomm</Link></div>
    <div class="header-links">
    <Link to="/cart">Cart</Link>
    {userInfo?<Link to="/profile">{userInfo.name}</Link>:<Link to="/signin">Sign In</Link>}
    </div>
    </header>
   <aside class="sidebar">
   <button class="aside-button" onClick={closemenu}>x</button>
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
    <main class="main">
    <div class="content">
    <Route path="/" exact={true} component={HomeScreen} />
    <Route path="/cart/:id?" component={CartScreen} />
    <Route path="/products/:id" exact={true} component={ProductScreen} />
    <Route path="/signin" exact={true} component={SignInScreen} />

    </div>

    </main>
    <footer class="footer">
    All rights reserved.
    </footer>
    </div>
</BrowserRouter>
  );
}

export default App;
