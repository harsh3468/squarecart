import axios from 'axios';
export const loginUser = (userData, history) => (dispatch) => {
    axios.post('/user/login', userData).then(res => {
        setAuthorizationHandler(res.data.token,res.data.user_id)
        dispatch({type:'SET_AUTH'})
        history.push('/')
    }).catch(err => {
        dispatch({type:'SET_ERROR',payload:err.response.data.error})
    })
}
const setAuthorizationHandler = (token,userId) => {
    localStorage.setItem('token',token)
    localStorage.setItem('user_id',userId)
    axios.defaults.headers.common['Authorization'] = token
}

export const signupUser = (newUserData,history)=>(dispatch)=>{
    delete newUserData.confirmPassword
    axios.post('/user/signup',newUserData).then(res=>{
        history.push('/login')
    }).catch(err=>{
        dispatch({type:'SET_ERROR',payload:err.response.data.error})
    })
}
export const logoutUser =()=>(dispatch)=>{
    localStorage.clear()
    delete axios.defaults.headers.common['Authorization']
    dispatch({type:'SET_AUTH'})
    window.location.href="/login"
}
