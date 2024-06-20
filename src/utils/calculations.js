export const calculateFixedInstallment = (loanAmount, annualInterestRate, numberOfInstallments, installmentsPerYear) => {
    const sum = [...Array(numberOfInstallments).keys()].reduce((acc, x) => acc + Math.pow(1 + ((annualInterestRate / 100) / installmentsPerYear), -x), 0);
    return loanAmount / sum;
}

export const calculateDecreasingInstallment = (loanAmount, annualInterestRate, numberOfInstallments) => {
    const r = annualInterestRate / 100;
    const monthlyInterestRate = r / 12;
    const capitalInstallment = loanAmount / numberOfInstallments;

    return [...Array(numberOfInstallments).keys()].map(i => {
        const interestInstallment = (loanAmount - (i * capitalInstallment)) * monthlyInterestRate;
        return capitalInstallment + interestInstallment;
    });
}

export const calculateLoanEndDate = (loanStartDate, numberOfInstallments) => {

    if (!loanStartDate || numberOfInstallments <= 0) return
    const dateObj = new Date(loanStartDate);
    dateObj.setMonth(dateObj.getMonth() + numberOfInstallments);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const formattedEndDate = `${year}-${month}`;

    return formattedEndDate;
}
