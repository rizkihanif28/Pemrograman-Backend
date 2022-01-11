const { check, validationResult } = require("express-validator");

const validator = [
  check("nama") // cek field nama
    .notEmpty() // tidak boleh kosong
    .withMessage("name must be filled")
    .isString() // harus string
    .withMessage("name must be of type string")
    .trim() // menghilangkan whitespace
    .escape(), // menghindari string yang berpotensi bahaya

  check("no_handphone") // cek field no_handphone
    .notEmpty() // tidak boleh kosong
    .withMessage("mobile number must be filled in")
    .isNumeric() // harus numeric
    .withMessage("mobile number must be a number")
    .isLength({ max: 13 }) // maksimal berjumlah 13
    .withMessage("the maximum number of mobile phone numbers is thirteen"),

  check("alamat") // cek field alamat
    .notEmpty() // tidak boleh kosong
    .withMessage("address must be filled")
    .trim() // menghilangkan whitespace
    .escape(), // menghindari string yang berpotensi bahaya

  check("status") // cek field status
    .notEmpty() // tidak boleh kosong
    .withMessage("status must be filled")
    .isString() // harus string
    .withMessage("status must be of type string"),

  check("tgl_masuk") // cek field tgl_masuk
    .notEmpty() // tidak boleh kosong
    .withMessage("tgl_masuk must be filled")
    .isDate() // harus bertype date
    .withMessage("tgl_masuk must be of type date"),

  // cek tgl_keluar
  check("tgl_keluar").isDate().withMessage("tgl_keluar must be of type dat"),
];

// membuat variable untuk konsumsi validator saat insert data
const validateInsert = [
  // panggil variable validator
  validator,
  // callback function
  // membuat kondisi validasi dan respon
  (req, res, next) => {
    // membuat variable berisikan request yang ingin di validasi
    const erorrs = validationResult(req);
    // jika ada erorrs, maka akan menampilkan data array yang tertulis pada check validator
    if (!erorrs.isEmpty()) {
      return res.status(422).json({ erorrs: erorrs.array() });
    }
    // jika tidak, maka next atau data ter insert ke database
    next();
  },
];

module.exports = validateInsert;
