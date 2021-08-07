import React, { Component } from 'react'

export class OrderPlaced extends Component {
    render() {
        return (
            <div className="order-placed-section">
                <div className="order-placed-message">
                    <h3>Order Placed</h3>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedeZQ2yTaaibK4x3OaaUXIde7hohPMk-YAQ9_KF9YCFS9ipNhcCZR7qagUuBdaN7yGz0&usqp=CAU"></img>
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
