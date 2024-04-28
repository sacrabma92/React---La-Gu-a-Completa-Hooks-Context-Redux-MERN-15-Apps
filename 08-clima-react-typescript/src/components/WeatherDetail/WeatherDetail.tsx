// import styles from './WeatherDetail.module.css'

import { Weather } from "../../hooks/useWeather"

type WeatherDetailsProps = {
  weather: Weather
}

export default function WeatherDetail({weather}:WeatherDetailsProps) {
  return (
    <div>
      <h2>Clima de:</h2>
    </div>
  )
}
