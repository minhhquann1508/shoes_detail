import React, { Component } from 'react'

export default class ProductItem extends Component {
    constructor(props) {
        super()
    }
    handleClickDetail = (product) => {
        this.props.setStateModal(product)
    }
    render() {
        const { image, name, price } = this.props.product
        return (
            <div className="card mx-2 my-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <img className="card-img-top" style={{ width: '100%' }} src={image} alt={image} />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <p className="card-text"><b>Giá:</b> {price} $</p>
                </div>
                <div className="card-footer py-4">
                    <button style={{ backgroundColor: 'rgba(0,0,0,0.9)', color: '#fff' }}
                        className='py-1 px-1'>
                        <span className='mx-1'>Add to cart</span>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button style={{ backgroundColor: '#ccc', color: '#000' }} data-toggle="modal" data-target="#modelId"
                        className='py-1 px-1 mx-2'
                        onClick={() => this.handleClickDetail(this.props.product)}>
                        <span className='mx-1'>Detail</span>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div >

        )
    }
}
