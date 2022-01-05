// import db
const db = require("../config/database");

// buat model Student
class Student {
  static all() {
    return new Promise((resolve, reject) => {
      // melakukan query untuk mengambil data
      const sql = "SELECT * FROM students";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }
  static async create(data) {
    // promise 1: insert data ke database
    const id = await new Promise((resolve, reject) => {
      // insert data ke db
      const insert = "INSERT INTO students SET ?";
      db.query(insert, data, (err, results) => {
        resolve(results.insertId);
      });
    });
    // promise 2: select data ke database (supaya terbaca ketika test)
    return new Promise((resolve, reject) => {
      // select data
      const select = "SELECT * from students WHERE id=?";
      db.query(select, id, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export model
module.exports = Student;
