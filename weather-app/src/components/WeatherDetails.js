import './WeatherDetails.css'
export default function WeatherDetails(object) {
    const iconUrl = `http://openweathermap.org/img/w/${object.object.icon}.png`

    return (
        <div>
            <h2>{object.object.cityName}, {object.object.country}</h2>
            <div className="title-temp"><span>{object.object.temp}°C </span> <img src={iconUrl} alt="icon" /></div>
            <p className="feels-like">Feels like {object.object.feels_like}°C. {object.object.weather}.</p>
            <p>High: <span className="high-temp">{object.object.high}°C </span> - Low: <span className="low-temp">{object.object.low}°C</span></p>
            <p>{object.object.weather} </p>
        </div>
    )
}

