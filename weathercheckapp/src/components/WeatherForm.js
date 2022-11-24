import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import {GeoAltFill} from 'react-bootstrap-icons'

function WeatherForm() {
    return(
        <Form>
            <InputGroup>
                <Form.Control
                    placeholder='Enter a location'
                    area-aria-label='Enter a location'
                    />
                <Button variant='secondary'>
                    <GeoAltFill />
                </Button>
                <Button>Go</Button>
            </InputGroup>
        </Form>
    )

}

export default WeatherForm