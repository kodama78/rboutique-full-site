import React, { Component } from 'react';
import Hours from './Hours';
import { data } from '../data';

class HoursContainer extends Component {
  hoursList = () => {
    return data.map(hours => {
      return <Hours {...hours} key={hours.weekday} />
    });
  }

  render () {
    return (
      <div className="hours-container">
        { this.hoursList() }
      </div>
    );
  }
}


export default HoursContainer;