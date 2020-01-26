import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './store/configStore';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import App from './App.jsx';


ReactDOM.render((
    <Provider store={ store }>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'))