import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewPayment extends Component {

    render() {
        return (
            <div>
                <div className="checkout-links">
                    <Link to='/checkout/shipping_billing'>{'< BACK'}</Link>
                    <Link to='/checkout/confirmation'>CONTINUE ></Link>
                </div>

                <div className="shipping-billing">
                    <div>
                        <h2>Payment Info</h2>
                        <div className="name" >
                            <input
                                type="text"
                                name="firstName"
                                placeholder="first name"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="last name"/>
                        </div>
                        <input
                            type="text"
                            name="address1"
                            placeholder="address"/>
                        <input
                            type="text"
                            name="address2"
                            placeholder="address 2 (optional)"
                        />
                        <div className="address">
                            <input
                                type="text"
                                name="city"
                                placeholder="city"
                            />
                            <input
                                type="text"
                                name="state"
                                placeholder="state"
                            />
                            <input
                                type="number"
                                name="zipCode"
                                placeholder="zip code"
                            />
                        </div>
                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="phone"
                        />
                    </div>
                    <div>
                        <h2>Review</h2>
                    </div>
                </div>
            </div>
        );
    };
}

export default ReviewPayment;