import axios from 'axios';
export const loginUser = (userData, history) => (dispatch) => {
    axios.post('/user/login', userData).then(res => {
        setAuthorizationHandler(res.data.token,res.data.user_id)
        dispatch({type:'SET_AUTH'})
        history.push('/')
    }).catch(err => {
        console.log(err)
    })
}
const setAuthorizationHandler = (token,userId) => {
    localStorage.setItem('token',token)
    localStorage.setItem('user_id',userId)
    axios.defaults.headers.common['Authorization'] = token
}

export const signupUser = (newUserData,history)=>(dispatch)=>{
    axios.post('/user/signup',newUserData).then(res=>{
        history.push('/login')
    }).catch(err=>{
        console.log(err)
    })
}
export const logoutUser =(history)=>(dispatch)=>{
    localStorage.clear()
    delete axios.defaults.headers.common['Authorization']
    dispatch({type:'SET_AUTH'})
    window.location.href="/login"
}
