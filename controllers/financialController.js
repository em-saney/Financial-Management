let incomes = [];
let expenses = [];

const calculateGrossIncome = (req, res) => {
  try {
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const grossIncome = totalIncome - totalExpense;

    res.json({ grossIncome });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const calculateLoss = (req, res) => {
  try {
    const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
    const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const grossIncome = totalIncome - totalExpense;
    const loss = grossIncome < 0 ? Math.abs(grossIncome) : 0;

    res.json({ loss });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  calculateGrossIncome,
  calculateLoss,
};
