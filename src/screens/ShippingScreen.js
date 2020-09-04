import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../component/CheckOutSteps';


function ShippingScreen(props){
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [zipCode,setzipCode]=useState('');
    const dispatch=useDispatch();
    const submitHandler=(e) => {
          e.preventDefault();
        dispatch(saveShipping({address,city,country,zipCode}));
        props.history.push("/payment");
    }
    return <div>
    
        <CheckoutSteps step1 step2></CheckoutSteps>  
    <div className="form">
    <form onSubmit={submitHandler}>
  
         <ul className="form-container">
         <li><h2>Shipping</h2></li>
              <li>
                 <label htmlFor="address">Address</label>
                 <input type="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)} placeholder="Address"></input>
             </li>
             <li>
                 <label htmlFor="city">City</label>
                 <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)} placeholder="City"></input>
             </li>
             <li>
                 <label htmlFor="country">Country</label>
                 <input type="text" id="country" name="country" onChange={(e) => setCountry(e.target.value)} placeholder="Country"></input>
             </li>
             <li>
                 <label htmlFor="zipCode">Zip Code</label>
                 <input type="text" id="zipCode" name="zipCode" onChange={(e) => setzipCode(e.target.value)} placeholder="Zip Code"></input>
             </li>
             <li>
                 <button type="submit" className="button primary">Continue</button>
             </li>
         </ul>
    </form>
  </div>
  
    </div>
}
 
export default ShippingScreen;