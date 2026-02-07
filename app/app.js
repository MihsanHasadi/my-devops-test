const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello DevOps Hybrid Deployment 🚀</h1><p>Status: Running on ' + process.platform + '</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
