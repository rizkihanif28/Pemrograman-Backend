// promise adalah objek atau paradigma nya adalah janji yang nanti nya akan di kembalikan
// promise menjadi salah satu penyelesaian masalah callbackhell

// promise dibagi menjadi 2 bagian: producing & consuming
// 3 state/keadaan promise:
// pending=> ketika promise sedang berjalan, resolve => ketika promise berhasil, reject=> ketika promise gagal
// simulasi download case

// producing promise :
const download = () => {
  return new Promise(function (resolve, reject) {
    const status = true;

    setTimeout(() => {
      if (status) {
        resolve("download selesai");
      } else {
        reject("download gagal");
      }
    }, 5000);
  });
};

download()
  // then untuk menangkap callback function
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });
