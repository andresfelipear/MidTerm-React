import './WeatherDetails.css'
export default function WeatherDetails({object}){
    const iconUrl = `http://openweathermap.org/img/w/${object.icon}.png`

    return (
        <div>
            <h2>{object.cityName}, {object.country}</h2>
            <div className="title-temp"><span>{object.temp}°C </span> <img src={iconUrl} alt="icon" /></div>
            <p className="feels-like">Feels like {object.feels_like}°C. {object.weather}.</p>
            <p>High: <span className="high-temp">{object.high.toFixed(2)}°C </span> - Low: <span className="low-temp">{object.low.toFixed(2)}°C</span></p>
        </div>
    )
}

