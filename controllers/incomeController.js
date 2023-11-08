let incomes = [];

const addIncome = (req, res) => {
  const { amount, description } = req.body;

  if (!amount || !description) {
    return res.status(400).json({ message: 'Invalid income amount ' });
  }

  const newIncome = { id: incomes.length + 1, amount: parseFloat(amount), description };
  incomes.push(newIncome);

  res.json({ message: 'Income was added successfully', income: newIncome });
};

module.exports = {
  addIncome,
};
