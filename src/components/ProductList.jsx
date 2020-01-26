import React, { Component } from 'react';

export default class ProductList extends Component {

    createProductFragment = (data) => {
        let productFragment = data.map((item) => {
            return (
                <h2 key={item.id}>{item.name}</h2>
            )
        });
        
        return productFragment;
    }

    render () {
        return (
            <div className="overstock-product-list">
                {this.props.data && this.productFragment(this.props.data)}
            </div>
        )
    }
}