// src/routes/income.js
const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

router.get('/', incomeController.fetchIncome);
router.post('/', incomeController.addIncome);
router.put('/:id', incomeController.updateIncome);

module.exports = router;
