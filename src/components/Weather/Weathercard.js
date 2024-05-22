import React, { useState } from 'react'

const Weathercard = ({temInfo}) => {    

    const {temp, pressure, humidity, weathermood, speed, name, country, sunset} = temInfo;

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`

    return (
        <>
            <div className="weathercard">
                <div className="weatherIcon">
                        {weathermood}
                </div>
                <div className="weatherinfo">
                    <div className="weatherinfo_left">
                        <div className="w__deg">{temp}&deg;</div>
                        <div className="w__mood">
                            <div className="w__mood_mood">{weathermood}</div>
                            <div className="w__mood_city">{name}, {country}</div>
                        </div>
                    </div>
                    <div className="weatherinfo_right">
                        {new Date().toLocaleString()}
                    </div>
                </div>
                <div className="footerinfo">
                    <div className="ftext">{timeStr} <br /> sunset</div>
                    <div className="ftext">{humidity} <br /> Humidity</div>
                    <div className="ftext">{pressure} <br /> Pressure</div>
                    <div className="ftext">{speed} <br /> Speed</div>
                </div>
            </div>
        </>
    )
}

export default Weathercard;
