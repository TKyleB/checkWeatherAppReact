import Button from "react-bootstrap/Button"
import WeatherDataItem from './WeatherDataItem'

function WeatherDataDisplay() {
    return (
        <div className='border'>
        <div className="d-flex justify-content-center align-items-center gap-3 border-bottom">
            <div className="d-flex flex-column align-items-center border-end px-5">
                <h5>Temperature</h5>
                <span> 80 F</span>
            </div>
            <div className="d-flex flex-column align-items-center px-3">
                <h5>Current Conditions</h5>
                <span> Slightly Cloudy</span>
            </div>
        </div>
        <div className='d-flex gap-3 mt-3'>
            <WeatherDataItem description="Feels Like:" data="80" units="F" />
            <WeatherDataItem description="Min Temp:" data="85" units="F" />
            <WeatherDataItem description="Max Temp:" data="90" units="F" />
        </div>
        <div className='d-flex gap-3 mt-3'>
            <WeatherDataItem description="Pressure" data="8100" units="Barr" />
            <WeatherDataItem description="Humidity" data="85" units="%" />
            <WeatherDataItem description="Wind Speed" data="5" units="mph" />
        </div>
        <div className="d-flex gap-2">
            <Button className="w-100 mt-3" variant="info">Change Units</Button>
            <Button className="w-100 mt-3" variant="success">New City</Button>
        </div>
        
        </div>
    )
}

export default WeatherDataDisplay