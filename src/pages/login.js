import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userAction'
class login extends React.Component {
    state={
        email:"",
        password:""
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=()=>{
        this.props.loginUser(this.state,this.props.history)
    }
    render() {
        return (
            <div className="login-section">
                <div className="login-form">
                    <h1>login</h1>
                    <input name="email" onChange={this.handleChange} placeholder="email"></input>
                    <input name="password" onChange={this.handleChange} placeholder="password"></input>
                    <button onClick={this.handleSubmit}>login</button>
                </div>
            </div>
        )
    }

}
const mapActionWithProps = {loginUser}
export default connect(null,mapActionWithProps)(login)