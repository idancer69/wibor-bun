import PropTypes from 'prop-types'

const InputWrapper = ({ children, className }) => (
    <div className={`w-full ${className}`}>
        {children}
    </div>
)

InputWrapper.propTypes = {
    children: PropTypes.Node.isRequired,
    className: PropTypes.string
}

export default InputWrapper;
