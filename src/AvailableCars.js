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
                            let noOfDays = this.props.duration
                            let timeCalc = 0
                            if (noOfDays >= 1) {
                                timeCalc = car.pricePerDay * 1
                            }
                            if (noOfDays > 1 && noOfDays <= 4) {
                                timeCalc = ((car.pricePerDay - car.pricePerDay * 0.1) * (noOfDays - 1)) + timeCalc
                            } else if (noOfDays > 4 && noOfDays <= 10) {
                                timeCalc = ((car.pricePerDay - car.pricePerDay * 0.1) * 3) + timeCalc
                                timeCalc += ((car.pricePerDay - car.pricePerDay * 0.3) * (noOfDays - 4))
                            } else if (noOfDays > 10) {
                                timeCalc += ((car.pricePerDay - car.pricePerDay * 0.1) * 3)
                                timeCalc += ((car.pricePerDay - car.pricePerDay * 0.3) * 6)
                                timeCalc += (car.pricePerDay - car.pricePerDay * 0.5) * (noOfDays - 10)
                            }
                            let distanceCalc = (this.props.distance * car.pricePerKm)
                            let rentalPrice = distanceCalc + timeCalc
                            return (<Fragment>
                                <div style={divStyle} key={index}>
                                    <img src={car.picturePath} style={style}></img>
                                    <div>{car.model}</div> <div>{car.brand}</div>
                                    <div style={{fontSize:'24px'}}>Rental Price : {rentalPrice}</div>
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