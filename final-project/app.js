/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */

// import express
const express = require("express");

// membuat objek express
const app = express();

// menggunakan middleware
app.use(express.json());

// import router dan mendefinisikan routing
const router = require("./routes/api");
app.use(router);

// mendefinisikan port
app.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
