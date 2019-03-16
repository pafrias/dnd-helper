import express from 'express';
import path from 'path';

const PORT = 3000;

const app = express();

app.get('/', express.static(path.resolve(__dirname, '/client/dist')));

app.listen(80, () => {
  console.log(`listenting on port ${PORT}`);
});
