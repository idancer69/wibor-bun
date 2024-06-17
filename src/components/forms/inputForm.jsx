import { useState } from "react";
import LabeledInput from "../common/labeledInput";
import RadioInput from "../common/radioInput";

const InputForm = ({ onCalculate }) => {
    const [loanValue, setLoanValue] = useState(0);
    const [loanStartDate, setLoanStartDate] = useState('');
    const [loanPeriod, setLoanPeriod] = useState(0);
    const [loanMargin, setLoanMargin] = useState(0);
    const [loanInstallmentType, setLoanInstallmentType] = useState('');
    const [errors, setErrors] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!loanValue || !loanStartDate || !loanPeriod || !loanMargin || !loanInstallmentType) {
            setErrors('Wszystkie pola są wymagane!')
            return
        }
        const data = { loanValue, loanStartDate, loanPeriod, loanMargin, loanInstallmentType }
        onCalculate(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Podaj dane kredytu</legend>
                <LabeledInput label="Kwota kredytu" name="loan_value" onChange={(e) => setLoanValue(parseInt(e.target.value, 10))} value={loanValue} step="10000" type="number" />
                <LabeledInput label="Data rozpoczęcia kredytowania" name="loan_start_date" onChange={(e) => setLoanStartDate(e.target.value)} value={loanStartDate} type="month" />
                <LabeledInput label="Ilość rat" name="loan_period" onChange={(e) => setLoanPeriod(parseInt(e.target.value, 10))} value={loanPeriod} min="1" max="360" type="number" />
                <LabeledInput label="Marża kredytu" name="loan_margin" onChange={(e) => setLoanMargin(parseInt(e.target.value, 10))} value={loanMargin} min="1" max="10" type="number" />
                <RadioInput label="Typ raty kredytu" name="loan_installment_type" onChange={(e) => setLoanInstallmentType(e.target.value)} options={[
                    { value: 'decreasing', label: 'Malejąca' },
                    { value: 'fixed', label: 'Stała' },
                ]}
                />
            </fieldset>
            <button type="submit">Wykonaj obliczenia</button>
            {errors && <p>{errors}</p>}
        </form>
    );
}

export default InputForm;