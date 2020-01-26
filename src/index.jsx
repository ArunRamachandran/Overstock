import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './store/configStore';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import PageLayout from './components/PageLayout';

ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            <ThemeProvider>
                <PageLayout/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))