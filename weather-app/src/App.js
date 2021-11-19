import axios from 'axios'
import { useState, useEffect } from 'react'

// import WeatherDetails from './WeatherDetails'
import WeatherDetails from './components/WeatherDetails'

function App() {
  const [weather, setWeather] = useState([{
    temp: '',
    cityName: '',
    weather: '',
    high: '',
    low: '',
    icon: '',
    isRaining: '',
  }
  ])

  useEffect(()=>{
    try{
      console.log("The component was updated");
      if(weather.weather.includes("rain")){
        setWeather({isRaining: "Rain rain go away"})
      }
    }
    catch(error){
      console.log(error);
    }

  }, [weather])

  const searchCity = (event) => {
    event.preventDefault()
    const city = document.querySelector('#city').value
    getCityWeather(city)
  }

  const getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`

    axios(url).then((response) => {
      setWeather({
        temp: response.data.main.temp,
        weather: response.data.weather[0].description,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        cityName: response.data.name,
        icon: response.data.weather[0].icon
      })
    })
  }

  return (
    <div className='App'>
      <h1>Weather App</h1>
      <div>
        <form onSubmit={searchCity}>
          <input
            type='text'
            name='city'
            id='city'
            placeholder='Enter a City Name'
          />
        </form>
      </div>

      <h4>{weather.isRaining}</h4>

      <hr />
      {weather.cityName && (<WeatherDetails
        object={weather}
      />)}
    </div>
  )
}

export default App
