export const calculateFixedInstallment = (loanAmount, annualInterestRate, numberOfInstallments, installmentsPerYear) => {
    const r = annualInterestRate / 100;
    const k = installmentsPerYear;
    const n = numberOfInstallments;

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.pow(1 + (r / k), -i);
    }

    const installment = loanAmount / sum;
    return installment;
}

export const calculateDecreasingInstallment = (loanAmount, annualInterestRate, numberOfInstallments) => {
    const r = annualInterestRate / 100;
    const monthlyInterestRate = r / 12;
    const capitalInstallment = loanAmount / numberOfInstallments;

    const installments = [];
    for (let i = 0; i < numberOfInstallments; i++) {
        const interestInstallment = (loanAmount - (i * capitalInstallment)) * monthlyInterestRate;
        const totalInstallment = capitalInstallment + interestInstallment;
        installments.push(totalInstallment);
    }
    return installments;
}

export const calculateLoanEndDate = (loanStartDate, numberOfInstallments) => {
    const monthsToAdd = parseInt(numberOfInstallments, 10);

    if (!loanStartDate || monthsToAdd <= 0) return
    const dateObj = new Date(loanStartDate);
    dateObj.setMonth(dateObj.getMonth() + monthsToAdd);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const formattedEndDate = `${year}-${month}`;

    return formattedEndDate;
}
