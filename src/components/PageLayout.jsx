import React, { Component } from 'react';
import Header from './Header';
import MainRouter from '../routes/MainRouter';
import './page-layout.less';
export default class PageLayout extends Component {

    render() {
        return (
            <div className="overstock-page-container">
                <Header/>
                <MainRouter/>
            </div>
        )
    }
}