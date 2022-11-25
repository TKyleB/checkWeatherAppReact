import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import {GeoAltFill} from 'react-bootstrap-icons'

function WeatherForm({setWeatherData, setDisplayHome, imperialUnits}) {

    function handleGeoLocationButton(e) {
        navigator.geolocation.getCurrentPosition(success)
        function success(pos) {
            getWeatherData(pos.coords)
        }
    }

    function handleGoButton(e) {
        let location = document.getElementById("location").value
        getWeatherData(null, location)
    }


    async function getWeatherData(pos, location) {
        const API_KEY = "9e2784936f680d48653338cba21190e3"
        let data
        let units = imperialUnits ? "imperial" : "metric"
        if (pos) {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.latitude}&lon=${pos.longitude}&units=${units}&appid=${API_KEY}`)
            data = await response.json()
        }
        if (location) {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`)
            data = await response.json()
        }
        setWeatherData({
            feels_like: (data.main.feels_like).toFixed(1),
            temp: (data.main.temp).toFixed(1),
            min_temp: (data.main.temp_min).toFixed(1),
            max_temp: (data.main.temp_max).toFixed(1),
            location: data.name,
            humidity: data.main.humidity,
            wind_speed: (data.wind.speed).toFixed(1),
            current_conditions: data.weather[0].description,
            pressure: data.main.pressure,

        })
        setDisplayHome(false)
        
    }
    return(
        <Form>
            <InputGroup>
                <Form.Control
                    placeholder='Enter a location'
                    area-aria-label='Enter a location'
                    id='location'
                    />
                <Button variant='secondary'
                        onClick={handleGeoLocationButton}>
                    <GeoAltFill />
                </Button>
                <Button onClick={handleGoButton}>Go</Button>
            </InputGroup>
        </Form>
    )

}


export default WeatherForm