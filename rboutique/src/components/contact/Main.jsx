import React from 'react';
import Form from './Form';
import Macarons from '../../assets/images/macarons-image.png';

const Main = props => (
    <div className="main-text contact">
        <div>
            <h1>Visit us!</h1>
            <p>
                Monday - Friday | 10am - 9pm<br />
                Saturday | 10am - 8pm<br />
                Sunday | 11am - 7pm<br />
                Closed Thanksgiving Day, Christmas Day and Easter Day
            </p>
            <p>
                1625 Post St<br />
                San Francisco, CA 94115
            </p>
            <p>949.800-3111</p>
            <p>
                <a href="mailto:orders@mboutique.com" target="_blank">orders@mboutique.com</a>
            </p>
            <p>Send your questions, comments and flavor suggestions or place an order!</p>
        </div>

        <Form />

        <div className="contact-image">
            <img src={ Macarons } alt="macarons"/>
        </div>
    </div>
)

export default Main;