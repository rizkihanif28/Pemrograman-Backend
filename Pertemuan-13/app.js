// import express
const express = require("express");

// buat objek expressnya
const app = express();

// menggunakan middleware
app.use(express.json());

// definisikan routing
const router = require("./routes/api");
app.use(router);

// definisikan port
app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
