import React from 'react';
import Macarons from '../assets/images/macarons-image.png';

const Main = props => (
  <div className="main">
    <div className="side-image">
      <img src={ Macarons } alt="macarons"/>
    </div>
    <div className="main-text">
      <h1>Welcome to MBoutique!</h1>

      <p>We're a home-based baking business that specializes in the making of French macarons, a gluten-free
        pastry item made from ground almonds. Our business began at the West Reading Farmers Market in
        2011- Last year (2013) marked our third and ﬁnal season of participation at the market. MBoutique was
        established to pay homage to the delicate French confectionery, the macaron. Our shop has been
        recognized as the connoisseurs of this delicious French pastry because of the wonderful variety of ﬂavors
        from our great master chefs.</p>

      <h1>We love Macarons!</h1>

      <p>Renowned macarons, French delights of the moment can be met in a variety of ﬂavors and colors and are
        brilliant preciser because of their simplicity - a crispy coating. but delicate in a loose blanket jam,
        chocolate butter cream is spread inviting.</p>

       <p>Macarons combines perfectly with champagne or white wine, tea or hot chooolate, fresh juices and natural
        fruit ﬂavored coffee and guarantee that these little delights soon become friend that you can not break.</p>

      <h1>Find the ﬂavor that you like. Try a sample every day!</h1>
    </div>
  </div>
);

export default Main;