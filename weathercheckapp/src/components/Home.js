import Title from "./Title"
import WeatherForm from './WeatherForm'
import WeatherInfo from './WeatherInfo'
import {useState} from "react"



function Home(){
    const [displayHome, setDisplayHome] = useState(true)
    const [imperialUnits, setImperialUnits] = useState(true)
    const [weatherData, setWeatherData] = useState(
        {
            feels_like: null,
            temp: null,
            min_temp: null,
            max_temp: null,
            location: null,
            humidity: null,
            wind_speed: null,
            current_conditions: null,
            pressure: null,
            image: null
        })
    if (displayHome) {
        return(
            <>
            <Title />
            <WeatherForm setWeatherData={setWeatherData} setDisplayHome={setDisplayHome} imperialUnits={imperialUnits}/>
            </>
        )
    }
    else {
    return(
        <>
        <Title />
        <WeatherInfo weatherData={weatherData} setWeatherData={setWeatherData} setDisplayHome={setDisplayHome} setImperialUnits={setImperialUnits} imperialUnits={imperialUnits}/>
        </>
    )
}
}

export default Home
