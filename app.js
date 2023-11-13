// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const loggerMiddleware = require('./middleware/logger');
const { userAuth } = require('./middleware/authenticateUser');
const incomeRoutes = require('./routes/income');
const expenseRoutes = require('./routes/expense');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(loggerMiddleware);

// Route groups
app.use('/income', userAuth, incomeRoutes);
app.use('/expense', userAuth, expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
