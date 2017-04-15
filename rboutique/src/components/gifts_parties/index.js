import React, { Component } from 'react';
import Hero from '../template/Hero';
import HeroImg from '../../assets/images/gifts-parties-image.png';

class GiftsParties extends Component {
    render() {
        return (
            <div>
                <Hero img={ HeroImg } />
                <h1>Gifts & Parties</h1>
            </div>
        );
    };
}

export default GiftsParties;