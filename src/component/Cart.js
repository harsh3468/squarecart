import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generateNewOrder } from '../redux/actions/dataAction'
import CartProduct from './CartProduct'
export class Cart extends Component {
    handleOrder = (order) => {
        if(order.length)
            this.props.generateNewOrder(order, this.props.history)
    }
    render() {
        const { cart } = this.props
        let totalAmount = 0;
        cart.forEach(data => {
            totalAmount += data.quantity * data.price
        });
        return (
            <div className="cart-section">
                <h4>Your Cart</h4>
                <div className="user-cart" >

                    <div className="cart-items">
                        <div className="cart-product">
                            <div className="empty-div">
                            </div>
                            <div className="cart-head"><h5>Name</h5></div>
                            <div className="cart-head"><h5>Quantity</h5></div>
                            <div className="cart-head"><h5>Price</h5></div>
                            <div className="cart-head"><h5>Amount</h5></div>
                        </div>
                        {cart.map((data) => <CartProduct details={data} />)}
                    </div>
                    <div className="proceed-cart">
                        <h5>
                            Amount: {totalAmount}
                            <br />
                            Tax : {totalAmount * 0.18}
                        </h5>
                        <h5>Total Pay: {(totalAmount + (totalAmount * 0.18)).toFixed(2)}</h5>
                        <button onClick={() => this.handleOrder({ orderMap:cart, total_amount: (totalAmount + (totalAmount * 0.18)).toFixed(2) })}>Checkout</button>
                    </div>

                </div>
            </div>
        )
    }
}
const mapStateWithProps = (state) => {
    return ({
        cart: Object.values(state.data.cart)
    })
}
const mapActionWithProps = {
    generateNewOrder
}
export default connect(mapStateWithProps, mapActionWithProps)(Cart)
