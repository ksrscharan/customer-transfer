// Import required modules
import express from 'express';
// Import CORS module
import cors from 'cors';

const app = express();

// Enable CORS for all origins
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Hardcoded token for authorization
const AUTH_TOKEN = 'Bearer ABCDE';

// API endpoint
app.post('/api/customer-transfer', (req, res) => {
  const { authorization } = req.headers;

  // Check if the authorization token matches
  if (authorization === AUTH_TOKEN) {
    res.status(200).json({ message: 'Authorization successful', data: 'Your data here' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Start the server on port 3333
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
