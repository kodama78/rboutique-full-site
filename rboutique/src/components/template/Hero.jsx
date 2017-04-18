import React from 'react';
import './hero.css';

const Hero = props => {
    return (
        <div className="hero-container">
            <img src={ props.img } alt=""/>
        </div>
    );
}


export default Hero;

