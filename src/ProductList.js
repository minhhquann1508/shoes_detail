import React, { Component } from 'react'
import data from './data/data.json'
import ProductItem from './ProductItem';
export default class ProductList extends Component {
    constructor() {
        super()
    }
    renderProductList = () => {
        return data.map((product, index) => {
            return (
                <div className="col-4" key={index}>
                    <ProductItem product={product} setStateModal={this.props.setStateModal} />
                </div>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <h2 className='text-center mt-3'>SHOES SHOP</h2>
                <div className="row">
                    {this.renderProductList()}
                </div>
            </div>
        )
    }
}
