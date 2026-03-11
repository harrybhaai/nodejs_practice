const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.use(express.static('public'));

// GET request
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// POST request (form submission)
app.post('/', (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name}, form submitted successfully!`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});