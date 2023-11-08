let expenses = [];

const addExpense = (req, res) => {
  const { amount, description } = req.body;

  if (!amount || !description) {
    return res.status(400).json({ message: 'Invalid expense amount' });
  }

  const newExpense = { id: expenses.length + 1, amount: parseFloat(amount), description };
  expenses.push(newExpense);

  res.json({ message: 'Expense is added successfully', expense: newExpense });
};

module.exports = {
  addExpense,
};
