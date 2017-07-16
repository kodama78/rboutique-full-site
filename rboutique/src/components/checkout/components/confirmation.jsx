import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends Component {

    render() {
        return (
            <div>
                <div className="checkout-links">
                    <Link to='/checkout/review_payment' id="confirmation-link">{'< BACK'}</Link>
                </div>
                <p>Confirmation</p>
            </div>
        );
    };
}

export default Confirmation;