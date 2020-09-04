import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {signin} from '../actions/userActions'
function SignInScreen(props){
    const [email,setEmail]=useState('');
    const [password,setPass]=useState('');
    const userSignin=useSelector(state => state.userSignin);
    const {loading,userInfo,error}=userSignin;
    const redirect=props.location.search?props.location.search.split("=")[1]:"/";
    const dispatch=useDispatch();
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
        }
        return () =>{
            //
        };
    },[userInfo]);
    function submitHandler(event){
                event.preventDefault();
           dispatch(signin(email,password));
    }
    return <div className="form">
      <form onSubmit={submitHandler}>
    
           <ul className="form-container">
           <li><h2>Sign-In</h2></li>
           <li>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
           </li>
               <li>
                   <label htmlFor="email">Email</label>
                   <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
               </li>
               <li>
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" name="password" onChange={(e) => setPass(e.target.value)} placeholder="Password"></input>
               </li>
               <li>
                   <button type="submit" className="button primary">Signin</button>
               </li>
               <li>New to ecomm ?</li>
               <li>
                   <Link to={redirect==="/"?"/register":"/register?redirect="+redirect}><button className="button full-width">Create your ecomm account</button></Link>
               </li>
           </ul>
      </form>
    </div>
}

export default SignInScreen;