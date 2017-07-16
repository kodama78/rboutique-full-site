import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../recycle/counter';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { cart } from './actions_shop';

import './order_summary.css';

const data = [
    {
        title: 'Carribean Chocolate',
        qty: 14,
        price: 23.10
    },
    {
        title: 'Something Else',
        qty: 16,
        price: 29.10
    },
    {
        title: 'Something More',
        qty: 11,
        price: 19.30
    }
]

class OrderSummary extends Component {

    listItems = arr => arr.map(item => {
        return (
            <div className="order-item" >
                <p>{ [item] }</p>
                <Counter
                    count={ item.count }
                    //action={ itemCount }
                    containerWidth="20%"
                    containerHeight=""
                    textColor="#6a6969"
                    textSize="14px"
                    symbolColor="#D6D6D6"
                    symbolSize="14px"
                />
                <p>{ item.price }</p>
                <div
                    className="item-delete"
                    onClick={() => {}}
                >
                    <span id="x"></span>
                    <span id="y"></span>
                </div>
            </div>
        )
    })

    render() {
        console.log('Order Summary: ', this.props.cart);
        return (
            <div>
                <div className="checkout-links">
                    <Link to='/checkout/shipping_billing' id="summary-link">CONTINUE ></Link>
                </div>

                <div className="order-summary">
                    <div className="order-table-head">
                        <p>Product</p>
                        <p>Qty.</p>
                        <p>Price</p>
                        <p></p>
                    </div>
                    { this.listItems(this.props.cart) }
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

//const mapDispatchToProps = dispatch => {
    // return bindActionCreators({
    //     cart
    // }, dispatch);
//}

export default connect(mapStateToProps, null)(OrderSummary);