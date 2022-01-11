// TODO 3: SETUP CONFIG DATABASE

// import mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// membuat koneksi database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// koneksikan database
db.connect((err) => {
  if (err) throw err;
  console.log("connection successful");
});

// export db
module.exports = db;
