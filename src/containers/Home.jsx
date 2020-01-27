import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import store from '../store/configStore';
import { fetchData, navigateToDashboard } from '../actions'
import ProductList from '../components/ProductList';
class Home extends Component {

    componentDidMount() {
        this.props.data && !this.props.data.length && this.props.fetchData();
    }

    handleProductDetails = (product) => {
        this.props.history.push('/dashboard');
        this.props.navigateToDashboard(product);
    }

    loadMoreproducts = () => {
        this.props.fetchData(this.props.pageIndex + 1)
    }

    render() {
        return (
            <div className="home-page">
                {   this.props.isLoader ? 
                    <CircularProgress/> : 
                    <ProductList 
                        data={this.props.data} 
                        onClickHandler={this.handleProductDetails}
                        loadMoreproducts={this.loadMoreproducts}/> 
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoader: state.appState.isLoader ? state.appState.isLoader: false,
    data: state.appState.data,
    pageIndex: state.appState.pageIndex
})

const mapDispatchToProps = dispatch => ({
    fetchData: (pageIndex) => store.dispatch(fetchData(pageIndex)),
    navigateToDashboard: (product) => store.dispatch(navigateToDashboard(product))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);