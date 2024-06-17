import { useState } from 'react'
import './App.css'
import InputForm from './components/forms/inputForm'
import ResultDisplay from './components/forms/resultDisplay'
import { calculateDecreasingInstallment, calculateFixedInstallment, calculateLoanEndDate } from './utils/calculations'

function App() {

  const [results, setResults] = useState(null);

  const handleCalculations = (data) => {
    const endData = calculateLoanEndDate(data.loanStartDate, data.loanPeriod)
    if (data.loanInstallmentType === 'fixed') {
      const fixed = calculateFixedInstallment(data.loanValue, data.loanMargin, data.loanPeriod, 12)

      setResults({
        fixedInstallment: fixed,
        decreasingInstallments: [],
        totalToRepay: fixed * data.loanPeriod,
        oneTimeRepayment: data.loanValue + (data.loanValue * data.loanMargin / 100),
        loanEndDate: endData
      });
    } else if (data.loanInstallmentType === 'decreasing') {
      const decreasing = calculateDecreasingInstallment(data.loanValue, data.loanMargin, data.loanPeriod);

      setResults({
        fixedInstallment: null,
        decreasingInstallments: decreasing,
        totalToRepay: decreasing.reduce((acc, curr) => acc + curr, 0),
        oneTimeRepayment: data.loanValue + (data.loanValue * data.loanMargin / 100),
        loanEndDate: endData
      });
    }
  };


  return (
    <>
      <h1>Kalkulator raty kredytu</h1>
      <InputForm onCalculate={handleCalculations} />
      {results && <ResultDisplay {...results} />}
    </>
  )
}

export default App
