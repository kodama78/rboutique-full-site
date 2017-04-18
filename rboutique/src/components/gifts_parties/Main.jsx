import React from 'react';
import './main.css';
import { giftBoxes } from '../../data';

const Main = props => (
    <div className="main gifts_parties">
        <h1>Let's eat macarons!</h1>

        <p>We make it easy to share la passion du macaron with your friends, family and colleagues.
          Choose from our array of premium gift options, or we can create a custom solution. Contact
          us when you need help planning your celebration!
          <a href="mailto:orders@mboutique.com" target="_blank"> orders@mboutique.com</a></p>

        <h1>Gift boxes</h1>

        <p>Our signature gift boxes make macarons the perfect gift for any occasion.</p>
        <ul>
            { giftBoxes.map(box => <li>{ `${ box.includes } - $${ box.price }` }</li>) }
        </ul>

        <h1>Party tower</h1>

        <p>Our 5-tiered party tower becomes the centerpiece of any special event or private
        celebration, elegantly presenting your unique selection of sixty macarons.</p>
        <ul>
            <li>tower of 60 macarons - $120</li>
        </ul>
    </div>
)

export default Main;