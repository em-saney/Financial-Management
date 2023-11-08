const express = require('express');
const app = express();
const routes = require('./routes');
const { requestLogger } = require('./middleware');

app.use(express.json());
app.use(requestLogger);
app.use('/', routes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
