const express = require('express');
const router = express.Router();

const incomeController = require('./controllers/incomeController');
const expenseController = require('./controllers/expenseController.js');
const financialController = require('./controllers/financialController');

router.post('/income', incomeController.addIncome);
router.post('/expense', expenseController.addExpense);
router.get('/gross-income', financialController.calculateGrossIncome);
router.get('/loss', financialController.calculateLoss);

module.exports = router;
