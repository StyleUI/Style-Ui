import React from 'react'
import '../Buttons/main.css'
import './main.css'
import product1 from '../images/range_rover.png'

export default function Product(probs) {
    return (
        <div>
            <div className="product-row">
                <div className="product-view-type1">
                    <div className="product-view">
                        <img className="product-image" src={product1} />
                        <h2 className="product-name"> Land Rover Range Rover Sports </h2>
                        <div className="product-column-view-2">
                            <b>&#x20B9; 86,00,000 </b>
                            <button className="ui-button red-basic-button radius-r"> Book Now </button>
                        </div>
                        <div className="product-column-view-4">
                            <b> Milage : 18KM</b>
                            <b> 178HP </b>
                            <b> 1977CC </b>
                            <b> 5 Seater </b>
                        </div>
                    </div>
                    <div className="product-view">
                        <img className="product-image" src={product1} />
                        <h2 className="product-name"> Land Rover Range Rover Sports </h2>
                        <div className="product-column-view-2">
                            <b>&#x20B9; 86,00,000 </b>
                            <button className="ui-button red-basic-button radius-r">Book Now</button>
                        </div>
                        <div className="product-column-view-4">
                            <b> Milage : 18KM</b>
                            <b> 178HP </b>
                            <b> 1977CC </b>
                            <b> 5 Seater </b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
