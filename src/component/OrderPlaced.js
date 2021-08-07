import React, { Component } from 'react'

export class OrderPlaced extends Component {
    render() {
        return (
            <div className="order-placed-section">
                <div className="order-placed-message">
                    <h3>Order Placed</h3>
                    <img src="/img/order-placed-icon.jpg"></img>
                    <p>Order id : {this.props.match.params.id}</p>
                    <p>Thanku for shopping from squarecart</p>
                    <div className="order-placed-button">
                    <a href="/" >continue shopping</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderPlaced
