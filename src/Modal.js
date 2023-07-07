import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props) {
        super()
    }
    render() {
        const { content } = this.props
        return (
            <div>

                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Product detail</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-4">
                                        <img className='img-fluid' src={content.image} alt={content.image} />
                                    </div>
                                    <div className="col-8">
                                        <h5>{content.name}</h5>
                                        <p><b>Desc:</b>{content.shortDescription}</p>
                                        <p><b>Quantity:</b>{content.quantity}</p>
                                        <p><b>Price:</b>{content.price}$</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
