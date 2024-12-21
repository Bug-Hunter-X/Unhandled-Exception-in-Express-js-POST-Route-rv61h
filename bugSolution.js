const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  try {
    if (!req.body || !req.body.name) {
      return res.status(400).send({ error: 'Name is required' });
    }
    const newUser = req.body;
    console.log(newUser.name);
    res.status(201).send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));