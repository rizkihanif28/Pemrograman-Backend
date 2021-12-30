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
  static create() {
    return new Promise((resolve, reject) => {
      // insert db
      const insert_sql = "INSERT INTO students SET";
      db.query(insert_sql, (err, results) => {
        resolve(results);
      });
    });
  }
}

// export model
module.exports = Student;
