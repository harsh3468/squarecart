import axios from 'axios';
export const getAllProducts = ()=>(dispatch)=>{
    axios.get('/products').then(res=>{
        dispatch({type:'SET_PRODUCTS',payload:res.data})
    }).catch(err=>{
        dispatch({type:'SET_ERROR',payload:err.res.data})
    })
}
export const generateNewOrder = (orderDetail,history)=>(dispatch)=>{
    axios.post('/order/placed',{...orderDetail,user_address:"Dayanand Nagar Shamli",user_id:localStorage.getItem('user_id')}).then(res=>{
        history.push(`/placed/${res.data}`)
        sessionStorage.clear()
    }).catch(err=>{
        dispatch({type:'SET_ERROR',payload:err.res.data})
    })
}
export const addTOCart = (cartData)=>(dispatch)=>{
    dispatch({type:'SET_CART',payload:cartData})
}
