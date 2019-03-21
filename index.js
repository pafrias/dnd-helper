const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 80;

const cache = [];

const app = express();
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, 'client/dist')));

app.get('/api/characters', (req, res) => {
  res.status(200).send(cache);
});

app.post('/api/characters', (req, res) => {
  const { body } = req;
  cache.push(body);
  res.status(201).send(`${cache.length - 1}`);
});

app.listen(80, () => {
  console.log(`listening on port ${PORT}`);
});
