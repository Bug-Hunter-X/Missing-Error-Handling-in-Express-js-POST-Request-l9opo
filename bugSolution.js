const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || Object.keys(user).length === 0) {
    return res.status(400).json({ error: 'Request body is empty' });
  }
  // Add more specific validation checks here as needed
  // ...
  console.log('Creating user:', user);
  res.status(201).send();
}).catch(err => {
  console.error('Error creating user:', err);
  res.status(500).json({ error: 'Failed to create user' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));