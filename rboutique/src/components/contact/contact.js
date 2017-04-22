import React, { Component } from 'react';
import Hero from '../template/Hero';
import Main from './Main';
import HeroImg from '../../assets/images/contact-image.png';

class Contact extends Component {
    render() {
        return (
            <div>
                <Hero img={ HeroImg } />
                <Main />
            </div>
        );
    };
}

export default Contact;