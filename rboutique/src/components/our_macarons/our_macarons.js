import React, { Component } from 'react';
import Hero from '../template/Hero';
import Main from './Main';
import HeroImg from '../../assets/images/our-macarons-image.png';

class OurMacarons extends Component {
    render () {
        return (
            <div>
                <Hero img={ HeroImg } />
                <Main />
            </div>
        )
    };
}

export default OurMacarons;