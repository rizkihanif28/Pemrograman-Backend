// import StudentController
const StudentController = require("../Controller/StudentController");

// import express
const express = require("express");

// buat objek baru routing
const router = express.Router();

// buat routing student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export routing
module.exports = router;
