function calcBudget() {
    try {
    // asking for all relevant user input
    const income = parseFloat(prompt("Please enter your monthly income without commas"));
    const expenses = parseFloat(prompt("Please enter your estimated monthly expenses"));
    const months = parseInt(prompt("Please enter how many months you want the budget to project for"));

    //accounting for error
    if (isNaN(income) || isNaN(expenses) || isNaN(months)) {
        alert("Please enter a number for all the proper questions");
    };

    //calculations
    const monthlysavings = income - expenses;
    const projected_savings = monthlysavings * months


    // formatting and outputting results
    document.getElementById("income").textContent = "Monthly Income $" + income.toFixed(2);
    document.getElementById("expenses").textContent = "Monthly Expenses $" + expenses.toFixed(2);
    document.getElementById("savings").textContent = "Monthly Savings $" + monthlysavings.toFixed(2);
    document.getElementById("total").textContent = "Total Projected Savings $" + projected_savings.toFixed(2);


    //warning if monthly savings are negative
    if (monthlysavings < 0) {
        alert("Warning: Spending exceeds income!");
    };

    //showing the monthly breakdown and making sure old months dont affect new
    const results = document.getElementById("breakdown");
    results.textContent = "";

    //looping over each month to get how much we saved up to that month (i)
    for (let i = 1; i <= months; i++) {
        let p = document.createElement('p');
        let mtotal = monthlysavings * i; 
        p.textContent = "Month " + i + ": $" + mtotal.toFixed(2);
        results.append(p);

    }

    } catch(error) {
    alert("There is an error" + error);
    };
}