import LocationHeader from "./LocationHeader"
import WeatherDataDisplay from "./WeatherDataDisplay"

function WeatherInfo({weatherData, setWeatherData, setDisplayHome, setImperialUnits, imperialUnits}) {
    return(
        <>
        <LocationHeader location={weatherData.location} country={weatherData.country}/>
        <WeatherDataDisplay weatherData={weatherData} setWeatherData={setWeatherData} setDisplayHome={setDisplayHome} setImperialUnits={setImperialUnits} imperialUnits={imperialUnits}/>
        </>
    )
}

export default WeatherInfo