import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import store from '../store/configStore';
import { fetchData, navigateToDashboard } from '../actions'
import ProductList from '../components/ProductList';
class Home extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    handleProductDetails = (product) => {
        this.props.history.push('/dashboard');
        this.props.navigateToDashboard(product);
    }

    render() {
        return (
            <div className="home-page">
                {   this.props.isLoader ? 
                    <CircularProgress/> : 
                    <ProductList data={this.props.data} onClickHandler={this.handleProductDetails}/> 
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoader: state.appState.isLoader ? state.appState.isLoader: false,
    data: state.appState.data
})

const mapDispatchToProps = dispatch => ({
    fetchData: (pageNumber) => store.dispatch(fetchData(pageNumber)),
    navigateToDashboard: (product) => store.dispatch(navigateToDashboard(product))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);