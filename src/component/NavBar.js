import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/userAction'

export class NavBar extends Component {
    handleLogout = () => {
        this.props.logoutUser(this.props.history);
    }
    render() {
        const { auth } = this.props
        return (
            <div className="app-header">
                <img src="/img/logo.png" />
                {auth ? <div className="app-header-nav">
                    <a href="/">Home</a>
                    <a href="/cart">Cart</a>
                    <a onClick={this.handleLogout}>Logout</a>
                </div> : ''}
            </div>
        )
    }
}
const mapStateWithProps = (state) => {
    return { auth: state.user.authenticated }
}
const mapActionWithProps = {
    logoutUser
}
export default connect(mapStateWithProps, mapActionWithProps)(NavBar)
