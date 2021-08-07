import React from 'react'
import {connect} from 'react-redux'
import Error from '../component/Error'
import {loginUser} from '../redux/actions/userAction'
class login extends React.Component {
    state={
        email:"",
        password:"",
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.loginUser(this.state,this.props.history)
    }
    render() {
        return (
            <div className="login-section">
                <div className="login-form">
                    <h1>login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input name="email" type="email" required onChange={this.handleChange} placeholder="email"></input>
                        <input name="password" type="password" minLength="8" required onChange={this.handleChange} placeholder="password"></input>
                        <button type="submit">login</button>
                    </form>
                    <p>new user <a href="/signup">click here</a> to signup</p>
                    <Error/>

                </div>
            </div>
        )
    }

}
const mapActionWithProps = {loginUser}
export default connect(null,mapActionWithProps)(login)