import React, { Component } from 'react'

export class CartProduct extends Component {
    render() {
        const {price,name,quantity,image_url}=this.props.details
        return (
            <div className="cart-product">
                <div>
                    <img src={image_url} />
                </div>
                <div>
                    <h5>{name}</h5>
                </div>
                <div>
                    <h5>{price}</h5>
                </div>
                <div>
                    <h5>{quantity}</h5>
                </div>
                <div>
                    <h5>{quantity*price}</h5>
                </div>
            </div>
        )
    }
}

export default CartProduct
