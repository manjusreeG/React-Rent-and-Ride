import React, { Component, Fragment, Image } from 'react'

class DisplayCars extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            cars: []
        })
    }

    componentDidMount() {
        fetch('/cars.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    cars: data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        let imageStyle = {
            width: '310px',
            margin: '10px 5px 0px 5px'
        };
        let carModelStyle = {
            width: '340px',
            display: 'inline-block',
            margin: '10px',
            padding: '10px',
            background: 'linear-gradient(115deg, lightgrey, transparent)',
            color: 'white'
        }
        let modelHeadingStyle = {
            backgroundColor: 'grey',
            color: 'white',
            width: '95%',
            fontSize: '40px',
            textAlign: 'center',
            fontFamily: 'cursive',
            padding: '5px',
            borderRadius: '20px'
        }
        return (<Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div style={modelHeadingStyle}>Our Models </div>
                        {this.state.cars.map((car, index) => {
                            return (<div style={carModelStyle} key={index}>
                                <img src={car.picturePath} style={imageStyle}></img>
                                <h2>{car.model}</h2> <h3>{car.brand}</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item" style={{ color: 'black' }}>Price per day: {car.pricePerDay}</li>
                                    <li className="list-group-item" style={{ color: 'black' }}>Price per km: {car.pricePerKm}</li>
                                </ul>
                            </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </Fragment >
        )
    }
}

export default DisplayCars