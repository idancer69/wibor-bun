import PropTypes from 'prop-types';

const LabeledInput = ({ id, label, name, type, onChange = () => { }, value, min, max, step, readOnly = false }) => {
    const inputId = id || name;
    return (
        <div>
            <label htmlFor={inputId}>{label}</label>
            <input id={inputId} name={name} type={type} onChange={onChange} value={value} min={min} max={max} step={step} readOnly={readOnly} />
        </div>
    );
}

LabeledInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['number', 'month']).isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    min: PropTypes.string,
    max: PropTypes.string,
    step: PropTypes.string,
    readOnly: PropTypes.bool
}

export default LabeledInput;