import PropTypes from 'prop-types'

const Input = ({ name, onChange, value, type = 'number', min = '0', max, step }) => (
    <input name={name} type={type} onChange={onChange} value={value} min={min} max={max} step={step} />
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['number', 'date', 'decimal', 'month']),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
}
export default Input;