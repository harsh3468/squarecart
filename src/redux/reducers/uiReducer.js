const initialState = {
    loading:false,
    error:""
}
export default function(state=initialState,action){
    switch(action.type)
    {   case 'SET_ERROR':
            return {...state,error:action.payload}
        default:
           return state 
    }
}