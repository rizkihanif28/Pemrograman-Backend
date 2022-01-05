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
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });
    // promise 2: select data ke database (supaya terbaca ketika test)
    const student = await this.find(id);
    return student;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      // mencari id
      const sql = "SELECT * FROM students WHERE id=?";
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      // update data
      const sql = "UPDATE students SET ? WHERE id=?";
      db.query(sql, [id, data], (err, results) => {
        resolve(results);
      });
    });
    // memanggil kembali method find
    // select by id
    const student = await this.find(id);
    return student;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id=?";
      db.query(sql, id, (err, results) => {});
    });
  }
}

// export model
module.exports = Student;
