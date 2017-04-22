import React, { Component } from 'react';
import Hero from '../template/Hero';
import Main from './Main';
import HeroImg from '../../assets/images/gifts-parties-image.png';

class GiftsParties extends Component {
    render() {
        return (
            <div>
                <Hero img={ HeroImg } />
                <Main />
            </div>
        );
    };
}

export default GiftsParties;