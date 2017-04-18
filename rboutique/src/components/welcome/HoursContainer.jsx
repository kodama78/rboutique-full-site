import React, { Component } from 'react';
import Hours from './Hours';
import './hoursContainer.css';
import { hoursData } from '../../data';

class HoursContainer extends Component {
  hoursList = () => {
    return hoursData.map(hours => {
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