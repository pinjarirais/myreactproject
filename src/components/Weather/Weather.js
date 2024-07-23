import React, { useEffect, useState } from 'react'
import './Weather.css'
import Weathercard from './Weathercard'

const Weather = () => {
    const [serachValue, setSearchValue] = useState("Pune");
    const [temInfo, settemInfo] = useState({});

    const getweatherinfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${serachValue}&units=metric&appid=b316bb7073053f47fba47cc903a29ec9`;

            const res = await fetch(url);
            const data = await res.json();

            console.log(data);

            const { temp, pressure, humidity } = data.main;
            const { main: weathermood } = data.weather[0];
            const { speed } = data.wind;
            const { name } = data;
            const { country, sunset } = data.sys;

            const myweatherdetails = {
                temp, pressure, humidity, weathermood, speed, name, country, sunset
            }

            settemInfo(myweatherdetails);


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getweatherinfo();
    }, [])

    return (
        <>
            <div className="weatherwpr">
                <div className="searchwpr">
                    <input type="text" name="" value={serachValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." />
                    <button onClick={getweatherinfo}>Search</button>
                </div>

                <Weathercard temInfo={temInfo} />

            </div>
        </>
    )
}

export default Weather;
