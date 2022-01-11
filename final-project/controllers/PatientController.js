// TODO 4: SETUP CONTROLLER

const Patient = require("../models/Patient");

class PatientController {
  async index(req, res) {
    if (patient) {
      const patient = await Patient.getAll();

      const response = {
        message: "get all resource",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "data is empty",
      };
      res.status(200).json(response);
    }
  }

  async store(req, res) {
    const patient = await Patient.create(req.body);
    const response = {
      message: "menambahkan data patients",
      data: patient,
    };
    res.status(201).json(response);
  }

  async update(req, res) {
    const {} = req.params;
    //

    const patient = await Patient.update(id, req.body);
    const response = {
      message: "",
    };
  }

  destroy(req, res) {
    res.send("Menghapus data Patients");
  }

  show(req, res) {
    res.send("Menampilkan detail Patients");
  }

  search(req, res) {
    res.send("Menampilkan pencarian patients");
  }

  positive(req, res) {
    res.send("Menampilkan patients positive");
  }

  recovered(req, res) {
    res.send("Menampilkan patients recovered");
  }

  dead(req, res) {
    res.send("Menampilkan patients dead");
  }
}

// membuat objek PatientController
const patient = new PatientController();

// export objek supaya bisa digunakan di router
module.exports = patient;
