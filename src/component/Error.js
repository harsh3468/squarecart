import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Error extends Component {
    render() {
        if(!this.props.error){
            return null
        }
        return (
            <div className="error-message">
                <p>{this.props.error}</p>
            </div>
        )
    }
}
const mapStateWithProps = (state)=>{
    return {
        error:state.UI.error
    }
}
export default connect(mapStateWithProps)(Error)
