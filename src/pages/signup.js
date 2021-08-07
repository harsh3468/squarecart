import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signupUser} from '../redux/actions/userAction'

export class signup extends Component {
    state={
        email:"",
        password:"",
        confirmPassword:""
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=()=>{
        console.log(this.state)
        this.props.signupUser(this.state,this.props.history)
    }
    
    render() {
        return (
            <div className="signup-section">
                <div className="signup-form">
                    <h1>sign up</h1>
                    <input name="email" onChange={this.handleChange} placeholder="email"></input>
                    <input name="password" onChange={this.handleChange}  placeholder="password"></input>
                    <input name="confirmPassword"onChange={this.handleChange}  placeholder="confirm password"></input>
                    <button onClick={this.handleSubmit}>create</button>
                </div>
            </div>
        )
    }
}

const mapActionWithProps = {signupUser}
export default connect(null,mapActionWithProps)(signup)