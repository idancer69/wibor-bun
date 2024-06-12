import { useState } from "react";
import LabeledInput from "../common/labeledInput";

const InputForm = () => {
    const [loanValue, setLoanValue] = useState(0); // Kwota kredytu
    const [loanStartDate, setLoanStartDate] = useState(0); // Początek kredytu
    const [loanPeriod, setLoanPeriod] = useState(0); // Okres trwania kredytu
    const [loanMargin, setLoanMargin] = useState(0); // Marża banku kredytu


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <LabeledInput label="Kwota kredytu" name="loan_value" onChange={(e) => setLoanValue(e.target.value)} value={loanValue} step={10000} />
            
            <LabeledInput label="Data rozpoczęcia kredytowania" name="loan_start_date" onChange={(e) => setLoanStartDate(e.target.value)} value={loanStartDate} type="month" />

            <LabeledInput label="Ilość rat" name="loan_period" onChange={(e) => setLoanPeriod(e.target.value)} value={loanPeriod} min="1" max="360" />

            <LabeledInput label="Marża kredytu" name="loan_margin" onChange={(e) => setLoanMargin(e.target.value)} value={loanMargin} min="1" max="10" />

            <button type="submit">Wykonaj obliczenia</button>
        </form>
    );
}

export default InputForm;