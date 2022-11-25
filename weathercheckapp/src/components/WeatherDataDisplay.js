import Button from "react-bootstrap/Button"
import WeatherDataItem from './WeatherDataItem'
import Image from 'react-bootstrap/Image'

function WeatherDataDisplay({weatherData, setWeatherData, setDisplayHome, setImperialUnits, imperialUnits}) {
    function changeUnits() {
        if (imperialUnits) convertToMetric()
        if (!imperialUnits) convertToImperial()
        setImperialUnits(!imperialUnits)

    }

    function convertToMetric() {
        setWeatherData({
            feels_like: ((weatherData.feels_like - 32) * (5/9)).toFixed(1),
            temp: ((weatherData.temp - 32) * (5/9)).toFixed(1),
            min_temp: ((weatherData.min_temp - 32) * (5/9)).toFixed(1),
            max_temp: ((weatherData.max_temp - 32) * (5/9)).toFixed(1),
            location: weatherData.location,
            humidity: weatherData.humidity,
            wind_speed: (weatherData.wind_speed * .4470).toFixed(1),
            current_conditions: weatherData.current_conditions,
            pressure: weatherData.pressure
        })
    }

    function convertToImperial() {
        setWeatherData({
            feels_like: ((weatherData.feels_like * 9 / 5) + 32).toFixed(1),
            temp: ((weatherData.temp * 9 / 5) + 32).toFixed(1),
            min_temp: ((weatherData.min_temp * 9 / 5) + 32).toFixed(1),
            max_temp: ((weatherData.max_temp * 9 / 5) + 32).toFixed(1),
            location: weatherData.location,
            humidity: weatherData.humidity,
            wind_speed: (weatherData.wind_speed * 2.23).toFixed(1),
            current_conditions: weatherData.current_conditions,
            pressure: weatherData.pressure

        })
    }
    return (
        <div className='border p-2'>
        <div className="d-flex justify-content-center align-items-center gap-3">
            <div className="d-flex flex-column align-items-center px-5">
                <h5>Temperature</h5>
                <span>{weatherData.temp} {imperialUnits ? "F" : "C"}</span>
                <h5>Current Conditions</h5>
                <span><Image className="m-0 p-0" src="https://openweathermap.org/img/wn/10n@2x.png" alt="" roundedCircle></Image></span>
            </div>
        </div>
        <div className='d-flex gap-3 mt-3 justify-content-center align-items-center'>
            <WeatherDataItem description="Feels Like:" data={weatherData.feels_like} units={imperialUnits ? "F" : "C"} />
            <WeatherDataItem description="Min Temp:" data={weatherData.min_temp} units={imperialUnits ? "F" : "C"} />
            <WeatherDataItem description="Max Temp:" data={weatherData.max_temp} units={imperialUnits ? "F" : "C"}/>
        </div>
        <div className='d-flex gap-3 mt-3 justify-content-center align-items-center'>
            <WeatherDataItem description="Pressure" data={weatherData.pressure} units="hPa" />
            <WeatherDataItem description="Humidity" data={weatherData.humidity} units="%" />
            <WeatherDataItem description="Wind Speed" data={weatherData.wind_speed} units={imperialUnits ? "mph" : "m/s"} />
        </div>
        <div className="d-flex gap-3 mt-3 justify-content-center align-items-center">
            <Button className="w-100 mt-3" variant="info" onClick={changeUnits}>Change Units</Button>
            <Button className="w-100 mt-3" variant="success" onClick={() => setDisplayHome(true)}>New City</Button>
        </div>
        
        </div>
    )
}

export default WeatherDataDisplay