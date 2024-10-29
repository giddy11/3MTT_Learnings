const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Simple API!');
});

// GET /api/users - Retrieve list of users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST /api/users - Add a new user
app.post('/api/users', (req, res) => {
  const newUser = req.body;

  // Validate that the 'name' field is provided
  if (!newUser.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Assign unique ID and add the new user
  newUser.id = Date.now();
  users.push(newUser);

  res.status(201).json(newUser);
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});