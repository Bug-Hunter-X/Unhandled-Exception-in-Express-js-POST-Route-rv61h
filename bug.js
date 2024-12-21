const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const newUser = req.body;
  // Missing error handling if req.body is malformed or empty
  console.log(newUser.name); // Error if name is missing
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));