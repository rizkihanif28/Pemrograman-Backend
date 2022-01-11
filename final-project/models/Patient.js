// TODO 5: SETUP MODEL

// import db
const db = require("../config/database");

/**
 * // import sequelize
const Sequelize = require("sequelize");

const Patient = db.define(
  "patients",
  {
    nama: Sequelize.STRING,
    no_handphone: Sequelize.INTEGER,
    alamat: Sequelize.STRING,
    status: Sequelize.STRING,
    tgl_masuk: Sequelize.DATE,
    tgl_keluar: Sequelize.DATE,
  },
  {
    freezeTableName: true,
  }
);
 */

class Patient {
  static getAll() {
    // membuat promise
    return new Promise((resolve, reject) => {
      // query untuk mengambil semua data patient
      const sql = "SELECT * FROM patients";
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      // query insert data ke db
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });
    // memanggil kembali method find selectById
    const patient = await this.find(id);
    return patient;
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      // query mencari id
      const sql = "SELECT * FROM patients WHERE id=?";
      db.query(sql, id, (err, results) => {
        resolve(results[0]);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      // query update data
      const sql = "UPDATE patients SET ? WHERE id=?";
      db.query(sql, [id, data], (err, results) => {
        resolve(results);
      });
    });
    // panggil method find untuk mencari id
    const patient = await this.find(id);
    return patient;
  }
}

// export model
module.exports = Patient;
