import React, { useState } from 'react';
import CheckOutComponent from '../component/CheckOutSteps';
import { useDispatch, useSelector } from 'react-redux';
import { savePayment } from '../actions/cartActions';
function PaymentScreen(props){
    const [paymentMethod,setMethod]=useState('paypal');
    const dispatch=useDispatch();
    const {shipping}=useSelector(state => state.cart);
    if(!shipping)
    {
        props.history.push("/shipping");
    }
    function submitHandler(e){
        e.preventDefault();
        dispatch(savePayment({paymentMethod}));
        props.history.push("/placeorder");
    }
return <div>
<CheckOutComponent step1 step2 step3></CheckOutComponent>
<div className="form">
    <form onSubmit={submitHandler}>
  
         <ul className="form-container">
         <li><h2>Payment</h2></li>
              <li>
              <div>
              <input type="radio" id="paypal" name="paypal" value="paypal" onChange={(e) => setMethod(e.target.value)} checked="checked"></input>
                 <label htmlFor="paypal">Paypal</label>
              </div> 
             </li>
             <li>
                 <button className="button primary">Continue</button>
             </li>
         </ul>
    </form>
  </div>
</div>
}

export default PaymentScreen;