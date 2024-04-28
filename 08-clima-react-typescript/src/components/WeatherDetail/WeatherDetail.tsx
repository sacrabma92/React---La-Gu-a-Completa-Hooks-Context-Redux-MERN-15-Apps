// import styles from './WeatherDetail.module.css'

import { formatTemperature } from "../../helpers"
import { Weather } from "../../hooks/useWeather"

type WeatherDetailsProps = {
  weather: Weather
}

export default function WeatherDetail({weather}:WeatherDetailsProps) {
  return (
    <div>
      <h2>Clima de: {weather.name}</h2>
      <p>{formatTemperature(weather.main.temp)}&deg;C</p>
      <div>
        <p>Min: <span>{formatTemperature(weather.main.temp_min)}&deg;C</span></p>
        <p>Max: <span>{formatTemperature(weather.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}
