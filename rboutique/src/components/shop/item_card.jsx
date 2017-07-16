import React from 'react';
import './item_card.css';
import Counter from '../recycle/counter';

export default props => {
    const { name, description, price, img, count, updateCount } = props;

    const itemCount = count => count < 0 ? null : updateCount( name, count, price );

    return (
        <div className="card">
            <img src={ img } alt={ name } />
            <h1>{ name }</h1>
            <p>{ description }</p>
            <p>Price: { price }</p>
            <div className="shop-counter">
                <p>Qty.</p>
                <Counter
                    count={ count }
                    action={ itemCount }
                    containerWidth="100%"
                    containerHeight=""
                    textColor="#95989A"
                    textSize="24px"
                    symbolColor=" #DF5277"
                    symbolSize="18px"
                />
            </div>
        </div>
    )
}