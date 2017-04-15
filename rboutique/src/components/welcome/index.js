import React, { Component } from 'react';
import Main from './Main';
import HoursContainer from './HoursContainer';
import Hero from '../template/Hero';
import HeroImg from '../../assets/images/welcome-image.png';

class Welcome extends Component {
    render() {
        return (
            <div>
                <Hero img={ HeroImg } />
                <Main />
                <HoursContainer />
            </div>
        );
    };
}

export default Welcome;
