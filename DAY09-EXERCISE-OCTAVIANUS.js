// DuplicateMap
var angka = [1, 2, 3, 4, 5];
var barang = ["Pensil", "Bolpoin", "Penghapus", "Tongkat", "tes"];

var duplicateMap = (value, Cbfn) => {
  var x = [];
  for (var i = 0; i < value.length; i++) {
    // x.push(Cbfn(value[i]));
    var result = Cbfn(value[i], i);
    x.push(result);
  }
  return x;
};
var tes = (val, index) => {
  return `${index + 1}. ${val}`;
};
// var indeexP = (val, index) => {
//   return `${index + 1} ${val}`;
// };
var list = barang.map((value, index) => {
  return `${index + 1}. ${value}`;
});
console.log(list);
console.log(duplicateMap(barang, tes));

// duplicate Filter
var coba = ["satu", "satuuu", "lima", "limaaa"];
var duplicateFilter = (value, Cb) => {
  var x = [];
  for (var i = 0; i < value.length; i++) {
    var result = Cb(value[i]);
    if (result == true) {
      x.push(value[i]);
    }
  }
  return x;
};

var tes2 = (val, index) => {
  return val.length === 6;
};

var resultFilter = coba.filter((coba) => coba.length === 6);
console.log(resultFilter);
console.log(duplicateFilter(coba, tes2));

// Duplicate Indexof
var angka2 = [1, 2, 3, 4, 5];
var duplikatIndexOf = (value, num, cb) => {
  var hasil = 0;

  for (var i = 0; i < value.length; i++) {
    hasil++;
    if (value[i] === num) {
      return hasil + cb;
    }
  }
};
var CbIndex = () => {
  return -1;
};
console.log(angka2.indexOf(5));
console.log(duplikatIndexOf(angka2, 5, CbIndex()));
