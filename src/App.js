import React, { Component } from 'react';
import DisplayCars from './DisplayCars'
import Background from '../server/public/bgImage.jpg'
import CarsHeader from './CarsHeader';


class App extends Component {
  render() {
    let style = {
      fontSize: '90px',
      textAlign: 'center',
      color: 'yellow',
      margin: '10px 5px 0px',
      fontFamily: 'calibri',
      letterSpacing: '10px'
    };
    let backgroundImageStyle = {
      backgroundImage: `url(${Background})`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%'

    }
    return (
      <div style={backgroundImageStyle}>
        <div style={style}>Rent And Ride </div>
        <CarsHeader></CarsHeader>
        <DisplayCars />
      </div>
    )
  }
}


export default App;
