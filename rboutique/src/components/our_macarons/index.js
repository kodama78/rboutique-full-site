import React, { Component } from 'react';
import Hero from '../template/Hero';
import HeroImg from '../../assets/images/our-macarons-image.png';

class OurMacarons extends Component {
    render() {
        return (
            <div>
                <Hero img={ HeroImg } />
                <h1>Our Macarons</h1>
            </div>
        );
    };
}

export default OurMacarons;