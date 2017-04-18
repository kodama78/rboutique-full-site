import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Template from '../template';
import Routes from '../../routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Template>
                    <Routes />
                </Template>
            </BrowserRouter>
        );
    };
}

export default App;
