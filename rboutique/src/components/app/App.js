import React, { Component } from 'react';
import './App.css';
import {
    Hero,
    Header,
    Main,
    HoursContainer,
    Footer } from './components';

import heroImage from './assets/images/welcome-image.png';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Hero img={ heroImage } />
                <Main />
                <HoursContainer />
                <Footer/>
            </div>
        );
    };

}

export default App;
