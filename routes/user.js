const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.put('/:id', authenticateUser, userController.updateUser);
router.patch('/:id', authenticateUser, userController.partialUpdateUser);
router.delete('/:id', authenticateUser, userController.deleteUser);

module.exports = router;