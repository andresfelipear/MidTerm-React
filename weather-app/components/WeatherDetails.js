import React, {Component} from 'react'

export default function WeatherDetails(object){

        const iconUrl = `http://openweathermap.org/img/w/${this.props.icon}.png`

        return (
            <div>
                <h4>{object.cityName} : {object.temp}</h4>
                <p>High: {object.high} - Low: {object.low}</p>
                <p>{object.weather} <img src={iconUrl} alt="icon" /></p>
            </div>
        )
}

