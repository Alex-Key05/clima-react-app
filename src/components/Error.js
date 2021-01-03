import PropTypes from 'prop-types'

const Error = ({mensaje}) => {
    return (
        <div className="card-panel red darken-4 error">
            <p>{mensaje}</p>
        </div>
    )
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error
