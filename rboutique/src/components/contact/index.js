import React, { Component } from 'react';
import Hero from '../template/Hero';
import HeroImg from '../../assets/images/contact-image.png';

class Contact extends Component {
    render() {
        return (
            <div>
                <Hero img={ HeroImg } />
                <h1>Contact</h1>
            </div>
        );
    };
}

export default Contact;