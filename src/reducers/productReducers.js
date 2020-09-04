import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
     PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL, 
     PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS,
       PRODUCT_SAVE_FAIL, 
       PRODUCT_DEL_FAIL,
       PRODUCT_DEL_REQUEST,
       PRODUCT_DEL_SUCCESS} from '../constants/productConstants';

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

const productSaveReducer = (state=initialstateofProduct,action) => {
    switch (action.type) {
        case PRODUCT_SAVE_REQUEST:
              return {
                  loading:true
              }
        case PRODUCT_SAVE_SUCCESS:
            return {
                loading:false,
                success:true,
                product:action.payload
            } 
        case PRODUCT_SAVE_FAIL:
            return {
                laoding:false,
                error:action.payload
            } 
            
        default:
            return state;
    }
}

const productDeleteReducer = (state={product:{}},action) => {
    switch (action.type) {
        case PRODUCT_DEL_REQUEST:
            return {
                laoding:true
            }
        case PRODUCT_DEL_SUCCESS:
            return {
                laoding:false,
                success:true,
                product:action.payload
            }
        case PRODUCT_DEL_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export  {productListReducer,productDetailsReducer,productSaveReducer,productDeleteReducer};