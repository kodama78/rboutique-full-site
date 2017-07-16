import React, { Component } from 'react';
import './checkout.css';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import ChevronRight from '../../assets/images/right-chevron-gray.png';
import {
    OrderSummary,
    ShippingBilling,
    ReviewPayment,
    Confirmation,
} from './components';


class Checkout extends Component {

    constructor (props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <ul id="process-tracker">
                    <li>ORDER SUMMARY</li>
                    <img src={ ChevronRight } alt="chevron right" />
                    <li>SHIPPING & BILLING</li>
                    <img src={ ChevronRight } alt="chevron right" />
                    <li>REVIEW PAYMENT</li>
                    <img src={ ChevronRight } alt="chevron right" />
                    <li>CONFIRMATION</li>
                </ul>

                <Switch>
                    <Redirect exact from='/checkout' to='/checkout/order_summary'/>
                    <Route path='/checkout/order_summary' component={ OrderSummary } />
                    <Route path='/checkout/shipping_billing' component={ ShippingBilling } />
                    <Route path='/checkout/review_payment' component={ ReviewPayment } />
                    <Route path='/checkout/confirmation' component={ Confirmation } />
                </Switch>

            </div>
        );
    };
}

export default Checkout;