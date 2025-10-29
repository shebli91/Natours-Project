const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ Message: 'Hello from the server side!', app: 'Natours' });
});

app.post('/', (req, res) => {
  res.status(200).json({
    Message: 'You can post to this endpoint',
    app: 'Natours',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
