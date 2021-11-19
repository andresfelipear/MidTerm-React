import { useState, useEffect } from 'react'
import "./App.css"
import WeatherDetails from './components/WeatherDetails'
import Popup from './components/Popup'
import Footer from './components/Footer'

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

  const [showPopup, setShowPopUp] = useState(false)
  const [showErrMsg, setErrMsg] = useState()

  useEffect(() => {
    try {
      console.log("The component was updated");
      if (!weather.cityName) {
        getCityWeather("Vancouver");
      }
      if (weather.weather && weather.weather.includes("rain")) {
        setWeather({ isRaining: "Rain rain go away" })
      }
    }
    catch (error) {
      console.log(error);
    }

  }, [weather])


  const handlePopup = ()=>{
    setShowPopUp(false);
    document.getElementById('city').value=null;
  }

  const searchCity = (event) => {
    event.preventDefault()
    const city = document.querySelector('#city').value

    getCityWeather(city)
  }

  const getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${REACT_APP_WEATHER_API}`
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=/.netlify/functions/todo`


    fetch(url).then(res => res.json()).then(
      (response) => {
        setWeather({
          temp: response.main.temp,
          weather: response.weather[0].description,
          high: response.main.temp_max,
          low: response.main.temp_min,
          cityName: response.name,
          icon: response.weather[0].icon,
          feels_like: response.main.feels_like,
          country: response.sys.country
        })
        document.getElementById('city').value=null;
      }
    ).catch(
      err => {
        console.log(err);
        setShowPopUp(true);
        setErrMsg(`The city ${city} that are you looking for not exists or have been writted wrong,  Try Again.`);
      }
    );
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

      {showPopup && (
        <Popup handlePopup={handlePopup} errMsg={showErrMsg}  />
      )}

      <Footer />
    </div>
  )
}

export default App
