import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store/configStore';

class Home extends Component {

    render() {
        return (
            <div className="home-page">
                <h1>This is home page</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoader: true,
    data: []
})

const mapDispatchToProps = dispatch => ({
    fetchData: (pageNumber) => store.dispatch(fetchData(pageNumber))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);