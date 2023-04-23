const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path= require('path')
const products = require('data/js.json');




const server = express();




server.use(express.static(path.join(__dirname, '')));
// ROUTES HERE
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

router.get('/consultas', (req, res) => {
  res.sendFile(__dirname + '/consu.html');
});

router.get('/banhos', (req, res) => {
  res.sendFile(__dirname + '/banh.html');
});

// THE ROUTER
server.use('/', router);








/* server.use(bodyParser.json());

const users = [];


server.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Hash the password using bcrypt
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Add the user to the users array
  users.push({ username, password: hashedPassword });

  // Return a success message
  res.json({ message: 'User registered successfully' });
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find the user in the users array
  const user = users.find((u) => u.username === username);

  // If the user is not found or the password is incorrect, return an error
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT and send it back to the client
  const token = jwt.sign({ username }, 'secret-key');
  res.json({ token });
});

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    try {
      // Verify the JWT using the secret key
      const decoded = jwt.verify(token, 'secret-key');
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  } else {
    res.status(401).json({ message: 'Authorization header required' });
  }
}

server.get('/protected', requireAuth, (req, res) => {
  res.json({ message: `Hello ${req.user.username}! This data is protected.` });
});

// 404 handler
server.use((req, res, next) => {
  res.status(404).json({ message: 'Content not found!' });
});

// Error handler
server.use((err, req, res, next) => {
  // console.error(err.stack);
  if (err instanceof HTTPError) {
    res.status(err.code).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Something broke!' });
  }
});*/











server.listen(3000, () => {
  console.log('Server is running on port 3000');
});



