import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';
import ShoppingCart from '../../assets/images/shopping_cart.png';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cart } from './actions_shop';

import {
    shopMacarons,
    shopGiftBoxes
} from '../../data';

import ItemCard from './item_card';

class Shop extends Component {
    constructor () {
        super();
        this.state = {
            shopCategoryArr: shopMacarons,
            menuColors: {
                macarons: '#DF5277',
                giftBoxes: '#6A6969'
            },
            macarons: {}
        };
    }

    updateCount = ( name, count, price ) => {
        if ( count === 0 ) {
            const macaronState = this.state.macarons;
            delete macaronState[name];
            this.setState({ macarons: { ...macaronState } });
            return;
        }
        console.log('Name: ', name, 'Count: ', count, 'Price: ', price);
        this.setState({ macarons: {...this.state.macarons, [name]: { count: count, price: price } }});
    }

    setMenuOptionColors = () => {
        this.setState({
            menuColors: {
                macarons: this.state.menuColors.macarons === '#DF5277' ? '#6A6969' : '#DF5277',
                giftBoxes: this.state.menuColors.giftBoxes === '#DF5277' ? '#6A6969' : '#DF5277'
            }
        });
    }

    displayItemCards = array => {
        return array.map(item => {
            const propsObj = {
                ...item,
                count: !!this.state.macarons[item.name] ? this.state.macarons[item.name].count : 0,
                updateCount: this.updateCount
            };
            return (
                <ItemCard { ...propsObj } key={ item.name } />
            )
        })
    }

    submitShopOrder = () => {
        const order = Object.keys(this.state.macarons).map(item => {
            console.log(item);
            return {
                [item]: this.state.macarons[item.name],
                count: this.state.macarons[item.name].count,
                price: this.state.macarons[item.name].price
            }
        })
        console.log('Macaron Array: ', order);
        this.props.cart(order);
    }

    render() {
        console.log('Render: ', this.state);
        return (
            <div>
                <div className="shopOption">
                    <div>
                        <p
                            onClick={() => {
                                this.setState({ shopCategoryArr: shopMacarons });
                                this.setMenuOptionColors();
                            }}
                            style={{ color: this.state.menuColors.macarons }}
                        >MACARONS</p>
                        <p
                            onClick={() => {
                                this.setState({ shopCategoryArr: shopGiftBoxes });
                                this.setMenuOptionColors();
                            }}
                            style={{ color: this.state.menuColors.giftBoxes }}
                        >GIFT BOXES</p>
                    </div>
                    <div id="checkout">
                        <Link
                            to='/checkout'
                            onClick={() => this.submitShopOrder()}
                        >
                            GO TO CHECKOUT <img src={ ShoppingCart } alt="shopping cart" />
                        </Link>
                    </div>
                </div>
                <div className="cards_container">
                    { this.displayItemCards(this.state.shopCategoryArr) }
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

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        cart
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);