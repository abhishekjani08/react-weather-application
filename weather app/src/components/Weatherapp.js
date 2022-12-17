import React, { useEffect } from "react";
import "./css/style.css";
import { useState } from "react";
const Weatherapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=896f2a1fe32e5f466140d9af63dd2a0f`;
            const response = await fetch(url);
            // console.log(response)
            const resJson = await response.json();
            console.log(resJson);
            setCity(resJson.main);
        }

        fetchApi();

    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className="inputfield"
                        defaultValue=""
                        value={search}
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                    <span className="search">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </span>
                </div>


                {city ? (
                    <>
                        <div className="info">
                            <div className="location">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>  {search}
                            </div>
                            <div className="temp">
                               Temperature at Present : {city.temp}°C
                            </div>

                            <div className="minmaxtemp">
                                Min-Max Temperature:{city.temp_min}°C-{city.temp_max}°C
                            </div>
                        </div>
                    </>
                )
                    :
                    (
                        <p className="nocity"><h2>No City named with {search} </h2></p>
                    )

                }
            </div>
            <h4 className='footer'>Designed by Abhishek Jani</h4>

        </>
    )
}
export default Weatherapp;