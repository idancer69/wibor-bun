import PropTypes from 'prop-types';
import LabeledInput from "../common/labeledInput";

const ResultDisplay = ({ fixedInstallment, decreasingInstallments, totalToRepay, oneTimeRepayment, loanEndDate }) => {
    return (
        <div>
            <h2>Wyniki kalkulacji</h2>
            <div>
                <h3>Całkowita kwota do spłaty</h3>
                <p>{totalToRepay} PLN</p>
            </div>
            <div>
                <h3>Kwota do jednorazowej spłaty</h3>
                <p>{oneTimeRepayment} PLN</p>
            </div>
            {fixedInstallment ? (
                <div>
                    <h3>Rata stała</h3>
                    <p>{fixedInstallment.toFixed(2)} PLN</p>
                </div>
            ) : (
                <div>
                    <h3>Raty malejące</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Miesiąc</th>
                                <th>Rata malejąca (PLN)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {decreasingInstallments.map((installment, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{installment.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <LabeledInput label="Data zakończenia kredytowania" name="loan_end_date" value={loanEndDate} type="month" readOnly />
        </div>
    );
};

ResultDisplay.propTypes = {
    fixedInstallment: PropTypes.number,
    decreasingInstallments: PropTypes.arrayOf(PropTypes.number),
    totalToRepay: PropTypes.number.isRequired,
    oneTimeRepayment: PropTypes.number.isRequired,
    loanEndDate: PropTypes.string,
}
export default ResultDisplay;
