const express = require('express');
const app = express();
const data = require('./data.json');

const PORT = process.env.PORT || 3001;

// middleware to enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Cache-Control", "no-store");
  next();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/interventions', (req, res) => {
  res.json(data);
});

app.get('/interventions/:id', (req, res) => {
  const interventionId = req.params.id;
});
