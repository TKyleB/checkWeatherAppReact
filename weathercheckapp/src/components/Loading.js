import Spinner from 'react-bootstrap/Spinner'

function Loading() {
    return(
        <div className='d-flex justify-content-center mt-2'>
            <Spinner animation='border' />
        </div>
    )
}
export default Loading