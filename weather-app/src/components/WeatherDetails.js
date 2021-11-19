import React, { Component } from 'react'

export default function WeatherDetails(object) {
    const iconUrl = `http://openweathermap.org/img/w/${object.object.icon}.png`

    return (
        <div>
            <h4>{object.object.cityName} : {object.object.temp}</h4>
            <p>High: {object.object.high} - Low: {object.object.low}</p>
            <p>{object.object.weather} <img src={iconUrl} alt="icon" /></p>
        </div>
    )
}

