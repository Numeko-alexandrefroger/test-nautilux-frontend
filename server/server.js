const express = require('express');
const app = express();
const data = require('./data.json');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/interventions', (req, res) => {
  res.json(data);
});
