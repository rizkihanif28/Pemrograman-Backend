// import array data
const fruits = require("./data.js");

// index menampilkan data
function index() {
  for (const fruit of fruits) {
    console.log(fruit);
  }
}

// menambahkan data
function store(name) {
  fruits.push(name);
  index();
}
// export lebih dari 1 function atau object
module.exports = { index, store };
