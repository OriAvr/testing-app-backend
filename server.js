require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const PORT = 3000;

// Create a connection object with your database configuration
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to database with ID " + connection.threadId);
});

app.use(cors());

app.get("/courses", (req, res) => {
  connection.query("SELECT * FROM courses", (error, results, fields) => {
    if (error) {
      console.error("Error fetching courses: " + error);
      res.status(500).send("Error fetching courses");
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
