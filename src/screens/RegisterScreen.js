import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props){
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPass]=useState('');
    const [repass,setTrackPass]=useState('');
    const userRegister=useSelector(state => state.userRegister);
    const {loading,userInfo,error}=userRegister;
    const redirect=props.location.search?props.location.search.split("=")[1]:"/";
    const dispatch=useDispatch();

    useEffect(()=>{
       if(userInfo){
           props.history.push(redirect);
       }
        return () => {
            //
        }
    },[userInfo]);
    const submitHandler=(e) =>{
        e.preventDefault();
        if(password!==repass)
        {
            alert("password does not match,please re-enter");
            setPass('');
            setTrackPass('');
        }
        else
        dispatch(register(name,email,password));
    }
    return (
        <div className="form">
      <form onSubmit={submitHandler}>
    
           <ul className="form-container">
           <li><h2>Create Account</h2></li>
                <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                </li>
                <li>
                   <label htmlFor="name">Name</label>
                   <input type="text" id="name" name="Name" onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
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
                   <label htmlFor="repassword">Re-Enter Password</label>
                   <input type="password" id="repassword" name="repassword" onChange={(e) => setTrackPass(e.target.value)} placeholder="Password"></input>
               </li>
               <li>
                   <button type="submit" className="button primary">Register</button>
               </li>
               <li>Already have an account ?</li>
               <li>
                   <Link to={redirect==="/"?"/signin":"/signin?redirect="+redirect}><button className="button full-width">Sign-In to your account</button></Link>
               </li>
           </ul>
      </form>
    </div>
    );
}

export default RegisterScreen;