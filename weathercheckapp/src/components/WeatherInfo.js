import LocationHeader from "./LocationHeader"
import WeatherDataDisplay from "./WeatherDataDisplay"

function WeatherInfo() {
    return(
        <>
        <LocationHeader location="Honoraville"/>
        <WeatherDataDisplay />
        </>
    )
}

export default WeatherInfo