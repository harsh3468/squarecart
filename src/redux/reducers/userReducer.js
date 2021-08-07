const initialState={
    authenticated:false
}
export default function(state=initialState,action){
    switch(action.type)
    {   
        case 'SET_AUTH':
            return {...state,authenticated:!state.authenticated}    
        default:
           return state 
    }
}