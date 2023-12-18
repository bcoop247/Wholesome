const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
  user: 'bcoop247',
  host: 'localhost',
  database: 'wholesome',
  password: 'S3m1n0les',
  port: 5432,
});

// const newUser = require('./routes/newUser');

app.get('/', (req, res) => {
  res.send('Hello World');
})

const isUsernameTaken = async (username) => {
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows.length > 0;
};

app.get('/newuser', (req, res) => {
  res.send('New User');
})

app.post('/newuser', async (req, res) => {
  const { email, capitalizedFirstName, capitalizedLastName, username, password } = req.body;
  const saltRounds = 10;
  const usernameTaken = await isUsernameTaken(username);
  if (usernameTaken) {
    return res.status(400).json({ error: 'Username already exists' });
  }

  bcrypt.hash(password, saltRounds, async (error, hashedPassword) => { 
    await pool.query(
      `INSERT INTO users (first_name, last_name, username, email, password)
      VALUES ($1, $2, $3, $4, $5)`, [capitalizedFirstName, capitalizedLastName, username, email, hashedPassword])
  
    .then(() => {
      console.log("User successfully inserted.");
      res.status(201).send("User created successfully."); // Send a success response
    })
    .catch((error) => {
      console.error("Error inserting user:", error);
      res.status(500).send("An error occurred while creating the user."); // Send an error response
    });
  
  });
});
 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});