import PropTypes from 'prop-types';

const RadioInput = ({ label, name, onChange, options }) => {
    return (
        <div>
            <label>{label}</label>
            {options.map((option) => (
                <div key={option.value}>
                    <input id={option.value} type="radio" name={name} value={option.value} onChange={onChange} />
                    <label htmlFor={option.value}>{option.label}</label>
                </div>
            ))}
        </div>
    )
}
RadioInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,
}

export default RadioInput;