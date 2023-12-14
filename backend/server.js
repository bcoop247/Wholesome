const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

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
  const { email, firstName, lastName, username, password } = req.body;

  try{
    await pool.query('INSERT INTO users (email, first_name, last_name, username, password) VALUES ($1, $2, $3, $4, $5)', [email, firstName, lastName, username, password]);
    res.json('New User Success');
  }catch(error){
    console.error('Error adding user to database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});