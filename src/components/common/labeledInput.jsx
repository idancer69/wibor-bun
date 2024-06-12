import PropTypes from 'prop-types';
import Label from './label';
import Input from './input';

const LabeledInput = ({ label, name, type, onChange, value, min, max, step }) => (
    <div>
        <Label htmlFor={name}>{label}</Label>
        <Input name={name} type={type} onChange={onChange} value={value} min={min} max={max} step={step} />
    </div>
);

LabeledInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
}

export default LabeledInput;