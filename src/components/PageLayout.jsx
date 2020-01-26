import React, { Component } from 'react';
import Header from './Header';

export default class PageLayout extends Component {

    render() {
        return (
            <div className="overstock-page-container">
                <Header/>
            </div>
        )
    }
}