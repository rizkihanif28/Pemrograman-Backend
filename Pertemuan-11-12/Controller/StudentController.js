// import student model
const Student = require("../models/Student");

// // import data student
// const students = require("../data/student.js");

class StudentController {
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "menampilkan semua student",
      data: students,
    };
    res.status(200).json(data);
  }

  async store(req, res) {
    // memanggil model dan kirim datanya
    const student = await Student.create(req.body);
    const data = {
      message: "menambahkan data students",
      data: student,
    };
    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const data = {
      message: `mengupdate data student ${id}`,
      data: [],
    };
    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    const data = {
      message: `menghapus data students ${id}`,
      data: students,
    };
    res.json(data);
  }
}

// buat objek Student Controller
const object = new StudentController();

// export objeknya
module.exports = object;
