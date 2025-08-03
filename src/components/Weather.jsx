import React, { useEffect, useState } from 'react';
import './Weather.css';

// icon imports
import search_icon from '../assets/search.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';

const Weather = () => {
  const [city, setCity] = useState("London");
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState(clear_icon);

  // map OpenWeather icon codes to local image assets
  const iconMap = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": cloud_icon,
    "04n": cloud_icon,
    "09d": drizzle_icon,
    "09n": drizzle_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "11d": rain_icon,
    "11n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
    "50d": drizzle_icon,
    "50n": drizzle_icon,
  };

  const fetchWeather = async (cityName) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        const { temp } = data.main;
        const { humidity } = data.main;
        const { speed: windSpeed } = data.wind;
        const { icon: iconCode } = data.weather[0];
        const { name } = data;

        setTemp(Math.round(temp));
        setHumidity(humidity);
        setWind(windSpeed);
        setLocation(name);

        const selectedIcon = iconMap[iconCode] || clear_icon;
        setIcon(selectedIcon);
      } else {
        alert(`City "${cityName}" not found.`);
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather(city);
    }
  };

  return (
    <div className='weather'>
      <div className='search-bar'>
        <input
          type="text"
          placeholder='Search'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <img src={search_icon} alt="search" onClick={() => fetchWeather(city)} />
      </div>

      <img src={icon} alt="weather-icon" className='weather-icon' />
      <p className='temperature'>{temp}°C</p>
      <p className='location'>{location}</p>

      <div className='weather-data'>
        <div className="col">
          <img src={humidity_icon} alt="humidity" />
          <div>
            <p>{humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind_icon} alt="wind" />
          <div>
            <p>{wind} km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
