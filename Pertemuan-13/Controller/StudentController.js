// import student model
const Student = require("../models/Student");

// // import data student
// const students = require("../data/student.js");

class StudentController {
  async index(req, res) {
    const student = await Student.all();

    const response = {
      message: "menampilkan semua student",
      data: student,
    };
    res.status(200).json(response);
  }

  async store(req, res) {
    // memanggil model dan kirim datanya
    const student = await Student.create(req.body);
    const response = {
      message: "menambahkan data students",
      data: student,
    };
    res.status(201).json(response);
  }

  async update(req, res) {
    const { id } = req.params;
    // mencari data berdasarkan id untuk diupdate
    // cek kondisi id?
    const student = await Student.find(id);

    if (student) {
      const studentUpdate = await Student.update(id, req.body);
      const response = {
        message: "mengupdate data student",
        data: studentUpdate,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "data not found",
      };
      res.status(404).json(response);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const response = {
        message: "menghapus data students",
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "data not found",
      };
      res.status(404).json(response);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    // mencari id melalui method find
    const student = await Student.find(id);
    // kondisi cek id?
    if (student) {
      const response = {
        message: "menampilkan detail students",
        data: student,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "data not found",
      };
      res.status(404).json(response);
    }
  }
}

// buat objek Student Controller
const object = new StudentController();

// export objeknya
module.exports = object;
