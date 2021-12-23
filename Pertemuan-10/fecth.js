// Mengambil data dari API

const hasil = fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    return result.json();
  })
  .then(function (result) {
    console.log(result);
  });
