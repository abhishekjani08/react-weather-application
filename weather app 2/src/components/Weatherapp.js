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
                    onChange={(event)=>{
                    
                    }}
                    />
                </div>

                <div className="info">
                    <div className="location">
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weatherapp;