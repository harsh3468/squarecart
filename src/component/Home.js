import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllProducts } from '../redux/actions/dataAction'
import Products from './Products'

export class Home extends Component {
    componentDidMount() {
        this.props.getAllProducts()
    }
    render() {
        const { products, auth } = this.props
        return (
            <div className="home-section" >
                <div className="product-title">
                    <h2>All Products</h2>
                    {!auth?<h6><a href="/login">click here </a>login/signup</h6>:''}
                </div>
                <div className="product-section">
                    {products.map((val, index) => (
                        <Products key={index} details={val} auth={auth} />
                    ))
                    }
                </div>
            </div>
        )
    }
}
const mapStateWithProps = (state) => {
    return ({
        products: state.data.products,
        auth: state.user.authenticated
    })
}
const mapActionWithProps = {
    getAllProducts
}
export default connect(mapStateWithProps, mapActionWithProps)(Home)
