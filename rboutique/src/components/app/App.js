import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Template from '../template/template';
import Routes from '../../routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter> {/*BrowserRouter is wrapped around the highest level parrent of you application*/}
                <Template> {/*Template contains the header and footer of our app and wraps all other components*/}
                    <Routes /> {/*Routes component is used here to display child components*/}
                </Template>
            </BrowserRouter>
        );
    };
}

export default App;
