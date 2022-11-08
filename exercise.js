// // ///task 1/////
// var nums = [500, 750, 300, 50, 10];

// var minMaxAve = (value) => {
//   var min;
//   var max;
//   var average = 0;
//   average += value[0];
//   average += value[1];
//   if (value[0] < value[1]) {
//     min = value[0];
//     max = value[1];
//   } else if (value[0] > value[1]) {
//     min = value[1];
//     max = value[0];
//   }
//   for (var i = 2; i < value.length; i++) {
//     average += value[i];
//     if (value[i] < min) {
//       min = value[i];
//     } else if (value[i] > max) {
//       max = value[i];
//     }
//   }
//   var Rerata = average / value.length;
//   return `min : ${min}, max : ${max}, Rata : ${Rerata}`;
// };
// console.log(minMaxAve(nums));

// ///task 2
// var words = "Apel Mangga Jeruk mengkudu jambu kunyit kelapa nagasari";
// var pengubahWords = (value) => {
//   var x = value.split(" ");
//   var y = [];
//   x.forEach((buah, index) => {
//     if (index < x.length - 1 && index < x.length - 2) {
//       y.push(`${buah},`);
//     } else if (index < x.length - 1) {
//       y.push(`${buah}`);
//     } else {
//       y.push(`dan ${buah}`);
//     }
//   });
//   return y.join(" ");
// };
// console.log(x.join());
// console.log(pengubahWords(words));

// //////////task 3
// var kataSPlit = "Hello World";
// var coba = kataSPlit.replaceAll("o", " ");
// console.log(coba);
// var duplikatSPlit = (value, cb) => {
//   var z = value.replaceAll(x, cb);
//   var x = z.split(" ");
//   var y = z.join(" ");

//   cb = (value) => {
//     return value.replaceAll(cb);
//   };
//   return y;
// };
// console.log(duplikatSPlit(kataSPlit, "O"));
/////task 4
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];

var penjumlahanDuaArray = (value1, value2) => {
  var value1Hasil = [];

  value1.forEach((val, index) => {
    value1Hasil.push(val + value2Hasil.forEach());
  });
  return value1Hasil;
};
console.log(penjumlahanDuaArray(num1, num2));
///task 5

/////task 6
// var angka = [1, 2, 3, 4, 5];

// var evenNum = (value) => {
//   var genap = [];
//   value.forEach((number) => {
//     if (number % 2 == 1) {
//       genap.push(number * 2);
//     } else genap.push(number);
//   });
//   return genap;
// };

// console.log(evenNum(angka));
