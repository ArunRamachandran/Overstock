import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import store from '../store/configStore';
import { fetchData } from '../actions'

class Home extends Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div className="home-page">
                {
                    this.props.isLoader ? 
                        <CircularProgress/>
                        : <h1>Data loaded</h1>
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
    fetchData: (pageNumber) => store.dispatch(fetchData(pageNumber))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);