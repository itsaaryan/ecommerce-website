import React from 'react';
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from '../constants/productConstants';

const initialstate={
    loading:false,
    products:[],
    error:''

}
const initialstateofProduct={
    loading:false,
    product:{},
    error:''

}


const productListReducer=(state=initialstate,action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
           return {
               loading:true,
               products:[],
               error:''
           }
        case PRODUCT_LIST_SUCCESS:
        return {
            loading:false,
            products:action.payload,
            error:''
        }
        case PRODUCT_LIST_FAIL:
        return {
            loading:false,
            products:[],
            error:action.payload
        }
    
        default:
            return state;
    }
}
const productDetailsReducer=(state=initialstateofProduct,action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
           return {
               loading:true,
               product:{},
               error:''
           }
        case PRODUCT_DETAILS_SUCCESS:
        return {
            loading:false,
            product:action.payload,
            error:''
        }
        case PRODUCT_DETAILS_FAIL:
        return {
            loading:false,
            product:{},
            error:action.payload
        }
    
        default:
            return state;
    }
}

export  {productListReducer,productDetailsReducer}