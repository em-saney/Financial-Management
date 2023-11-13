const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

router.get('/', expenseController.fetchExpense);
router.post('/', expenseController.addExpense);
router.put('/:id', expenseController.updateExpense);

module.exports = router;
