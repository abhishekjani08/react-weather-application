import React from "react";
import "./css/style.css";
const Weatherapp = () => {
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputfield"
                        defaultValue=""
                        onChange={(event) => {

                        }}
                    />
                    <span className="search">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>

                <div className="info">
                    <div className="location">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>  Mumbai
                    </div>
                    <div className="temp">
                        15deg
                    </div>
                    <div className="minmaxtemp">
                        15min-20max
                    </div>
                </div>
{/* 
                    <ul class="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> */}
            </div>
        </>
    )
}
export default Weatherapp;