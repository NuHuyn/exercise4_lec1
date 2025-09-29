const express = require('express');
const app = express();

// Middleware để parse JSON body
app.use(express.json());

// Route GET
app.get('/', (req, res) => {
  res.send('Hello World! REST API is running');
});

// Route GET example
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ai Nu' },
    { id: 2, name: 'Alice' }
  ]);
});

// Route POST example
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.json({ message: 'User created', data: newUser });
});

// Route PUT example 
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  res.json({ message: `User ${id} updated`, data: updatedUser });
});

// Route DELETE example 
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `User ${id} deleted` });
});

// Chạy server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
