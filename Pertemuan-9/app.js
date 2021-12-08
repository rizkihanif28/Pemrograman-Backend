const {
  index,
  store,
  update,
  destroy,
} = require("./Controllers/FruitController");

const main = () => {
  console.log("Menampilkan BUah");
  index();
  console.log("Menambahkan Buah Pisang");
  store("Pisang");
  console.log("Mengubah index ke 0 menjadi Kelapa");
  update(0, "Kelapa");
  console.log("Menghapus index ke 0");
  destroy(0);
};
main();
