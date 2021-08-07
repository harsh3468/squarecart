import React,{useEffect} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './component/NavBar';
import login from './pages/login';
import signup from './pages/signup'
import Home from './component/Home';
import Cart from './component/Cart';
import OrderPlaced from './component/OrderPlaced';
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import AuthRoute from './utils/AuthRoute';
import store from './redux/store/store';
import NormalRoute from './utils/NormalRoute';
import Footer from './component/Footer';
axios.defaults.baseURL = "https://squarecart-api.herokuapp.com"
const token = localStorage.getItem('token')
if(token){
  const decodeToken = jwtDecode(token)
  if(decodeToken.exp * 1000 < Date.now()){
    window.location.href = '/login'
  }else{
    store.dispatch({type:"SET_AUTH",payload:true})
    axios.defaults.headers.common['Authorization'] = token
  }
} 
function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact component={Home} path="/"></Route>
          <AuthRoute exact component={login} path="/login"></AuthRoute>
          <AuthRoute exact component={signup} path="/signup"></AuthRoute>
          <NormalRoute exact component={Cart} path="/cart"></NormalRoute>
          <NormalRoute exact component={OrderPlaced} path="/placed/:id"></NormalRoute>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
