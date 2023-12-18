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

app.get('/newuser', (req, res) => {
  res.send('New User');
})

app.post('/newuser', async (req, res) => {
  const { email, capitalizedFirstName, capitalizedLastName, username, password } = req.body;
  const saltRounds = 10;

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