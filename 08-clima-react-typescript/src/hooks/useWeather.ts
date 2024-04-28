import axios from 'axios'
import { z } from 'zod'
import { SearchType } from '../types'

// Definir el Type Guards
// function isWeatherResponse(weather: unknown): weather is Weather{
//   return(
//     Boolean(weather) &&
//     typeof weather === 'object' &&
//     typeof (weather as Weather).name === 'string' &&
//     typeof (weather as Weather).main.temp === 'number' &&
//     typeof (weather as Weather).main.temp_min === 'number' &&
//     typeof (weather as Weather).main.temp_max === 'number'
//   )
// }

// ZOD
// const Weather = z.object({
//   name: z.string(),
//   main: z.object({
//     temp: z.number(),
//     temp_min: z.number(),
//     temp_max: z.number()
//   })
// })

type Weather = z.infer<typeof Weather>


export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appId = import.meta.env.VITE_API_KEY
    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      const { data } = await axios(geoUrl)

      const lat = data[0].lat
      const lon = data[0].lon

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

      // Castear el type
      // const { data: weatherResult } = await axios<Weather>(weatherUrl)
      // console.log(weatherResult.name)
      // console.log(weatherResult.main.tem)
      // console.log(weatherResult.main.temp_max)
      // console.log(weatherResult.main.temp_min)

      // Type Guards
      // const { data: weatherResult } = await axios(weatherUrl)
      // const result = isWeatherResponse(weatherResult)
      // if(result){
      //   console.log(weatherResult.name)
      // }else{
      //   console.log('Respuesta mal formada')
      // }

      // Zod
      // const { data: weatherResult } = await axios(weatherUrl)
      // const result = Weather.safeParse(weatherResult)
      // if(result.success){
      //   console.log(result.data.name)
      //   console.log(result.data.main.temp)
      // }

    } catch (error) {
      console.log(error)
    }
  }
  return {
    fetchWeather
  }
}