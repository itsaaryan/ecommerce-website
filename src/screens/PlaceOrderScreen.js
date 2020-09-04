import React, { useEffect } from "react";
import CheckoutSteps from "../component/CheckOutSteps";
import { useSelector, useDispatch } from "react-redux";
function PlaceOrderScreen(props){

    const cart=useSelector(state => state.cart);
    const {cartItems,shipping,payment} = cart;


        
    const itemsPrice=cartItems.reduce((a,c) => a+c.price*c.qty,0);
    const shippingPrice=itemsPrice>100?0:10;
    const taxPrice=.15*itemsPrice;
    const totalPrice=itemsPrice+shippingPrice+taxPrice;
    if(!payment){
        props.history.push("/payment");
    }

    if(!shipping){
        props.history.push("/shipping");
    }

      const dispatch=useDispatch();

   useEffect(() => {
       
   },[]);



      const submitHandler = () => {
    props.history.push("/signin?redirect=shipping");
      }
    const placeOrderHandler= () => {
        //create order
    }
    return <div>
    <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
           <div className="placeorder">
        <div className="placeorder-info">
        <div>
            <h3>Shipping</h3>
            <div>
               {cart.shipping.address},{cart.shipping.city},
               {cart.shipping.country},{cart.shipping.zipCode}
            </div>
            <div>
                <h3>payment</h3>
                 <div>
                     Payment Method: {cart.payment.paymentMethod}
                 </div>
            </div>
        </div>
        <div>
        <ul className="cart-list-container">
<li>
  <h3>Shopping Cart</h3>
  <div>Price</div>
</li>
    {cartItems.length===0 ? 
    <div>
      Cart is empty
    </div> :
    cartItems.map(item => 
    <li>
     <div className="cart-image">
     <img src={item.image} alt={item.name}  />
     </div>
      
      <div className="cart-name">
      <div>
      {item.name}
      </div>
      <div>
        Oty: {item.qty}
    </div>
    </div>
    <div className="cart-price">
    ${item.price}  
    </div>
    
    </li>)
    }
          </ul>
        </div>
        </div>
        <div className="placeorder-action">
           <ul>
               <li><h3>Order Summary</h3></li>
               <li>
                   <div>Items</div>
                   <div>${itemsPrice}</div>
               </li>
               <li>
                   <div>Shipping</div>
                   <div>${shippingPrice}</div>
               </li>
               <li>
                   <div>Tax</div>
                   <div>${taxPrice}</div>
               </li>
               <li>
                   <div>Order Total</div>
                   <div>${totalPrice}</div>
               </li>
               <li><button className="button primary full-width" onClick={placeOrderHandler}>Place Order</button></li>

           </ul>
        </div>
      </div>
    </div>
}

export default PlaceOrderScreen;