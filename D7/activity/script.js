function calculateLoan() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById("loan-amount").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById("loan-term").value) * 12;

    // Check if inputs are valid
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm) || loanAmount <= 0 || loanTerm <= 0) {
        alert("Please enter valid values.");
        return;
    }

    // Monthly payment calculation using the loan formula
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    // Display the result
    document.getElementById("monthly-payment").innerText = `$${monthlyPayment.toFixed(2)}`;
}
