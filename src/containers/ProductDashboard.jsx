import React, { Component } from 'react';
import store from '../store/configStore';
import { connect } from 'react-redux';


class ProductDashboard extends Component {

    render () {
        const data = this.props.selectedProduct;
        console.log("User selected data: ", data);

        return (
            <div className="product-dashboard">
                <h1>Product Dashboard</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedProduct: state.appState.selectedProduct
})

export default connect(
    mapStateToProps
)(ProductDashboard);