import axios from 'axios';

const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, 
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL, 
    PRODUCT_SAVE_FAIL, PRODUCT_SAVE_SUCCESS, PRODUCT_SAVE_REQUEST,
PRODUCT_DEL_REQUEST,PRODUCT_DEL_SUCCESS,PRODUCT_DEL_FAIL } = require("../constants/productConstants");
const listProducts = () => async (dispatch) => {
try{
        dispatch({type:PRODUCT_LIST_REQUEST});
        const {data}= await axios.get("/api/products");
        dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
    }
catch(error){
dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
}
}
const detailsProduct= (productId) => async (dispatch) => {
    try{
       dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId});
       const {data}=await axios.get("/api/products/"+productId);
       dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});
    }
    catch(error){
    dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.message});
    }
}

const saveProduct = (productInfo) => async (dispatch,getState) =>{
    try{
        dispatch({type:PRODUCT_SAVE_REQUEST,payload:productInfo});
        const {userSignin:{userInfo}} = getState();
        if(productInfo._id){
            const {data} =await axios.put("/api/products/"+productInfo._id,productInfo,{headers:{
                'Authorization':'Bearer '+userInfo.token
         }});
         dispatch({type:PRODUCT_SAVE_SUCCESS,payload:data,success:true});
        }
        else{
        const {data} =await axios.post("/api/products",productInfo,{headers:{
               'Authorization':'Bearer '+userInfo.token
        }
    });
    dispatch({type:PRODUCT_SAVE_SUCCESS,payload:data,success:true});
}
        
    }
    catch(error){
        dispatch({type:PRODUCT_SAVE_FAIL,payload:error.message});
    }
}

const deleteProduct= (productId) => async (dispatch,getState) => {
    try{
        const {userSignin:{userInfo}} = getState();
          dispatch({type:PRODUCT_DEL_REQUEST,payload:productId});
          const {data} =await axios.delete("/api/products/"+productId,{headers:{
            'Authorization':'Bearer '+userInfo.token
     }});
        dispatch({type:PRODUCT_DEL_SUCCESS,payload:data,success:true});
    }
    catch(err){
       dispatch({type:PRODUCT_DEL_FAIL,payload:err.message});
    }
}


export {listProducts,detailsProduct,saveProduct,deleteProduct};


