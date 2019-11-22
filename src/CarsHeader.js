import React, { Fragment, Component, InputGroup, InputGroupPrepend, InputGroupText, FormControl } from "react";
import AvailableCars from "./AvailableCars";

class CarsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '',
      distance: '',
      filteredCars: [],
    };

    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
    this.state.query = {
      'duration': this.state.duration,
      'distance': this.state.distance
    }
    const url = '/cars.json?duration=' + this.state.duration + '&distance=' + this.state.distance
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          filteredCars: data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let inlineBlock = {
      display: 'inline-block',
      width: '45%',
      margin: '20px'
    }
    let inlineStyle = {
      display: 'inline-block'
    }
    let headerStyle = {
      marginTop: '50px',
      height: '230px',
      width: '100%',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 0,0.8)',
      fontFamily: 'Verdana, Arial, Helvetica, sans-serif',
      fontSize: '16px'
    }
    let buttonStyle = {
      marginLeft: '45%', marginRight: '45%', margin: '10px'
    }
    return (
      <Fragment>
        <div className="container" style={headerStyle}>
          <div className="form-group" style={inlineBlock}>
            <label htmlFor="duration">Duration(in Days)</label>
            <input type="range" id="duration" min="0" max="30" className="form-control form-control-lg" name="duration" value={this.state.duration}
              onChange={this.handleChange} style={inlineStyle} />
            <div>Pick your required duration from 0-30 <div style={{ fontWeight: 'bold' }}>{this.state.duration}</div></div>
          </div>
          <div className="form-group" style={inlineBlock}>
            <label htmlFor="distance">Distance(in Kms)</label>
            <input type="range" id="distance" min="0" max="3000" step="50" className="form-control form-control-lg" name="distance" value={this.state.distance}
              onChange={this.handleChange} />
            <div>Pick your required distance from 0 to 3000 <div style={{ fontWeight: 'bold' }}>{this.state.distance}</div></div>
          </div>
          <button className="btn btn-dark" style={buttonStyle} onClick={this.publish}> Search for Availability  </button>
          <AvailableCars filteredCars={this.state.filteredCars} duration={this.state.duration} distance={this.state.distance}></AvailableCars>
        </div>
      </Fragment>
    )
  }
}
export default CarsHeader;