import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signupUser} from '../redux/actions/userAction'

export class signup extends Component {
    state={
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.signupUser(this.state,this.props.history)
    }
    
    render() {
        return (
            <div className="signup-section">
                <div className="signup-form">
                    <h1>sign up</h1>
                    <form onSubmit={this.handleSubmit} >
                    <input name="firstName" type="text" onChange={this.handleChange} placeholder="first name"></input>
                    <input name="lastName" type="text" onChange={this.handleChange}  placeholder="last name"></input>
                    <input name="phoneNumber"  minLength="10" maxLength="10" onChange={this.handleChange}  placeholder="phone number"></input>
                    <input name="email" type="email" onChange={this.handleChange} placeholder="email"></input>
                    <input name="password" type="password" minLength="8" onChange={this.handleChange}  placeholder="password"></input>
                    <input name="confirmPassword" type="password" minLength="8"onChange={this.handleChange}  placeholder="confirm password"></input>
                    <button type="submit">create</button>
                    </form>
                    <p>existing user <a href="/login">click here</a> to login</p>
                </div>
            </div>
        )
    }
}

const mapActionWithProps = {signupUser}
export default connect(null,mapActionWithProps)(signup)