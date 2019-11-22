import React, { Component, Fragment, Image } from 'react'

class AvailableCars extends Component {
    constructor() {
        super()
    }

    render() {
        let style = {
            width: '200px',
            margin: '10px 5px 0px 5px'
        };
        let divStyle = {
            width: '250px',
            display: 'inline-block',
            margin: '10px',
            padding: '10px',
            fontSize: '17px',
            border: '0.3px solid #99FFCC',
            color: '#99FFCC',
            background: 'linear-gradient(10deg, darkcyan, darkgrey)',
            padding: '10px'
        }
        return (<Fragment>
            <div className="container" style={{ marginTop: '5%' }}>
                <div className="row">
                    <div className="col-sm-12 ">
                        {this.props.filteredCars.map((car, index) => {
                            let timeCalc = (this.props.duration * car.pricePerDay)
                            let distanceCalc = (this.props.distance * car.pricePerKm)
                            let rentalPrice = distanceCalc + timeCalc
                            return (<Fragment>
                                <div style={divStyle} key={index}>
                                    <img src={car.picturePath} style={style}></img>
                                    <div>{car.model}</div> <div>{car.brand}</div>
                                    <div>Rental Price : {rentalPrice}</div>
                                </div>
                            </Fragment>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
        )
    }
}

export default AvailableCars