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
    feels_like: '',
  }
  ])

  useEffect(()=>{
    try{
      console.log("The component was updated");
      if(!weather.cityName){
        getCityWeather("Vancouver");
      }
      if(weather.weather && weather.weather.includes("rain")){
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
    

    fetch(url).then(res=>res.json()).then(
      (response)=>{
        console.log(response);
        setWeather({
          temp: response.main.temp,
          weather: response.weather[0].description,
          high: response.main.temp_max,
          low: response.main.temp_min,
          cityName: response.name,
          icon: response.weather[0].icon,
          feels_like:response.main.feels_like,
          country:response.sys.country
        })
      }
    )
    
    // axios(url).then((response) => {
    //   console.log(response);
    //   setWeather({
    //     temp: response.data.main.temp,
    //     weather: response.data.weather[0].description,
    //     high: response.data.main.temp_max,
    //     low: response.data.main.temp_min,
    //     cityName: response.data.name,
    //     icon: response.data.weather[0].icon,
    //     feels_like:response.data.main.feels_like,
    //     country:response.data.sys.country
    //   })
    // })
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
            placeholder='Search City'
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
