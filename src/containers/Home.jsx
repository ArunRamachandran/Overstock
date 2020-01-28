import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import store from '../store/configStore';
import { fetchData, navigateToDashboard, addToFavouritesList, removeFromFavouritesList } from '../actions'
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

    handleUserFavouritesList = (productID) => {
       if (this.props.favourites.indexOf(productID) > -1) {
            this.props.removeFromFavouritesList(productID)
       } else {
           this.props.addToFavouritesList(productID)
       }
    }

    render() {
        return (
            <div className="home-page">
                {   this.props.isLoader ? 
                    <CircularProgress/> : 
                    <ProductList 
                        data={this.props.data} 
                        onClickHandler={this.handleProductDetails}
                        loadMoreproducts={this.loadMoreproducts}
                        favourites={this.props.favourites}
                        handleUserFavouritesList={this.handleUserFavouritesList}/> 
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoader: state.appState.isLoader ? state.appState.isLoader: false,
    data: state.appState.data,
    pageIndex: state.appState.pageIndex,
    favourites: state.appState.favourites
})

const mapDispatchToProps = dispatch => ({
    fetchData: (pageIndex) => store.dispatch(fetchData(pageIndex)),
    navigateToDashboard: (product) => store.dispatch(navigateToDashboard(product)),
    addToFavouritesList: (productID) => store.dispatch(addToFavouritesList(productID)),
    removeFromFavouritesList: (productID) => store.dispatch(removeFromFavouritesList(productID))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);