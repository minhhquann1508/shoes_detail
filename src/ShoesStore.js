import React, { Component, Fragment } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'

export default class ShoesStore extends Component {
    constructor(props) {
        super()
        this.state = {
            productDetail: {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": 350,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 995,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
            },
        }
    }
    setStateModal = (product) => {
        this.setState({
            productDetail: product
        })
    }
    render() {
        return <Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div style={{ display: 'flex', alignItems: 'center', height: '100vh', width: '100%' }}>
                            <div>
                                <div className='mt-3 px-2 py-2' style={{ width: '100%', border: '1px solid #ccc', cursor: 'pointer' }}>
                                    Home
                                </div>
                                <div className='mt-3 px-2 py-2' style={{ width: '100%', border: '1px solid #ccc', cursor: 'pointer' }}>
                                    Giỏ hàng <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9" style={{ borderLeft: '1px solid #ccc' }}>
                        <ProductList setStateModal={this.setStateModal} />
                    </div>
                </div>
            </div>
            <Modal content={this.state.productDetail} />
        </Fragment>
    }
}
