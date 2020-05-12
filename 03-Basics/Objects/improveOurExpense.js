const account = {
    name: 'Gemy',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let total = 0
        this.expenses.forEach(function (expense) {
            total = total + expense.amount
        });

        return `${this.name} has ${total}$ in expenses`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())