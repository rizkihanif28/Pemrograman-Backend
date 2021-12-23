// case rebus air dan masak
// menyelesaikan dengan callback

// producing promise
const persiapan = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("persiapan ...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("rebus air ...");
    }, 7000);
  });
};

const masak = () => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("masak mie...");
      resolve("selesai !");
    }, 5000);
  });
};

// consuming promise menambahkan async di depan function
async function main() {
  // LEBIH SINGKAT DENGAN ASYNC
  console.log(await persiapan());
  console.log(await rebusAir());
  console.log(await masak());

  //** */ await hanya bisa dijalankan di dalam function async

  // CONSUMING DENGAN AWAIT
  //   const hasilPersiapan = await persiapan();
  //   console.log(hasilPersiapan);

  //   const hasilRebusAir = await rebusAir();
  //   console.log(hasilRebusAir);

  //   const hasilMasak = await masak();
  //   console.log(hasilMasak);

  // CONSUMING DENGAN THEN

  //   persiapan()
  //     .then(function (result) {
  //       console.log(result);
  //       return rebusAir();
  //     })
  //     .then(function (result) {
  //       console.log(result);
  //       return masak();
  //     })
  //     .then(function (result) {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
}

main();
