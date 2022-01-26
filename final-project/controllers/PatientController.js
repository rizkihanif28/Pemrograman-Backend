// TODO 4: SETUP CONTROLLER

// import model
const Patient = require("../models/Patient");

class PatientController {
  /**
   * index untuk menampilkan semua data
   * @param {object} req
   * @param {object} res
   */
  async index(req, res) {
    const patient = await Patient.getAll();
    if (patient.length > 0) {
      const response = {
        message: "Get all resource",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Data is empty",
      };
      res.status(200).json(response);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */

  async store(req, res) {
    const patient = await Patient.create(req.body);
    const response = {
      message: "Resource is added successfully",
      data: patient,
    };
    res.status(201).json(response);
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */

  async update(req, res) {
    const { id } = req.params;

    const patient = await Patient.find(id);

    if (patient.length > 0) {
      const patient = await Patient.update(id, req.body);

      const response = {
        message: "Resource is update successfully",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */
  async destroy(req, res) {
    const { id } = req.params;

    const patient = await Patient.find(id);

    if (patient.length > 0) {
      const patient = await Patient.delete(id, req.body);
      const response = {
        message: "Resource is delete successfully",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */

  async show(req, res) {
    const { id } = req.params;
    const patient = await Patient.find(id);

    if (patient.length > 0) {
      const response = {
        message: "Get detail resource",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */
  async search(req, res) {
    const { name } = req.params;
    const patient = await Patient.getSearch(name);

    if (patient.length > 0) {
      const response = {
        message: "Get searched resource",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */

  async positive(req, res) {
    const { status } = req.params;
    const patient = await Patient.getPositive(status);

    if (patient.length > 0) {
      const response = {
        message: "Get status resource",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */

  async recovered(req, res) {
    const { status } = req.params;
    const patient = await Patient.getRecovered(status);

    if (patient.length > 0) {
      const response = {
        message: "Get status resource",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   */

  async dead(req, res) {
    const { status } = req.params;
    const patient = await Patient.getDead(status);

    if (patient.length > 0) {
      const response = {
        message: "Get status resource",
        data: patient,
      };
      res.status(200).json(response);
    } else {
      const response = {
        message: "Resource not found",
      };
      res.status(404).json(response);
    }
  }
}
// membuat objek PatientController
const patient = new PatientController();

// export objek supaya bisa digunakan di router
module.exports = patient;
