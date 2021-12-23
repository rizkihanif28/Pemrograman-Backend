const formatName = (name) => {
  const result = name.toUpperCase();
  return result;

  // kalau hanya 1 statement bisa langsung return
  // contoh :
  // const formatName = (name) => name.toUpperCase();
};

const getName = (name, callformatName) => {
  const result = callformatName(name);
  console.log(result);

  // kalau hanya 1 statement bisa langsung return
  // contoh :
  // const getName = (name, callformatName) => console.log(callformatName(name));
};

getName("rizki", formatName);
