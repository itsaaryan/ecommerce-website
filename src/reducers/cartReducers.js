import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING, CART_SAVE_PAYMENT } from "../constants/cartConstants";

const cartReducer=(state={cartItems:[],shipping:{},payment:{}},action) =>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const product=state.cartItems.find(x => x.product === action.payload.product)
           if(product){
            product.qty=Number(action.payload.qty);
               return {cartItems:state.cartItems.map(x=>x.product===product.product?product:x)};
           }
               return {cartItems:[...state.cartItems,action.payload]};
           case CART_REMOVE_ITEM:
               return {cartItems:state.cartItems.filter(x=>x.product!==action.payload)}
            case CART_SAVE_SHIPPING:
                return {
                    ...state,
                    shipping:action.payload
                }
            case CART_SAVE_PAYMENT:
                return {
                    ...state,
                    payment:action.payload
                }
         default :
             return state;
    }
}

export {cartReducer};