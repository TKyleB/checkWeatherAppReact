import Stack from 'react-bootstrap/Stack'

function WeatherDataItem(props) {
    return (
        <Stack className='align-items-center'>
                <div>{props.description}</div>
                <div>{props.data} {props.units}</div>
        </Stack>
    )
}

export default WeatherDataItem