import React, { Component } from 'react'

export class Products extends Component {
    state = {
        quantity: 0
    }
    handleAdd = () => {
        this.setState({ quantity: this.state.quantity + 1 })
    }
    handleSubtract = () => {
        if (this.state.quantity > 0) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }
    addToCart = (detail) => {
        if (!sessionStorage.getItem('cartMap')) {
            sessionStorage.setItem('cartMap', JSON.stringify({ [detail.id]: { ...detail, quantity: this.state.quantity } }))
        } else {
            let cartMap = { ...JSON.parse(sessionStorage.getItem('cartMap')), [detail.id]: { ...detail, quantity: this.state.quantity } }
            sessionStorage.setItem('cartMap', JSON.stringify(cartMap))
        }
        this.setState({ quantity: 0 })
    }
    render() {
        const { id, description, price, name, image_url, stock } = this.props.details
        const { quantity } = this.state
        const { auth } = this.props
        return (
            <div className="card-item">
                <img src={image_url} width="200px" height="140px" />
                <div className="add-btn-section">
                    <div>
                        <h4>{name}</h4>
                        <h5>Rs {price}</h5>
                    </div>
                    <div>
                        <i onClick={this.handleSubtract} className="fas fa-minus"></i><span className="product-count">{this.state.quantity}</span><i onClick={this.handleAdd} className="fas fa-plus"></i>
                    </div>
                </div>
                <div className="description-section">
                    <a href="/">read more</a>
                    {quantity ?<button onClick={auth?() => this.addToCart(this.props.details):window.location.href="/login"} className="add-to-cart">Add</button> : ''}
                </div>
            </div>
        )
    }
}
export default (Products)
