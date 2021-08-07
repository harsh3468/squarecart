const initialState = {
    products:[],
    cart:sessionStorage.getItem('cartMap')?JSON.parse(sessionStorage.getItem('cartMap')):[]
    
}
export default function(state=initialState,action){
    switch(action.type)
    {   case "SET_PRODUCTS":
            return {...state,products:action.payload}
        case "SET_CART":
            return {...state,cart:action.payload}
        default:
            return state 
    }
}