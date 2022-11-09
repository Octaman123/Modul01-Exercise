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

// ///task 2//////////////////

var words = "Apel Mangga Jeruk mengkudu jambu kunyit";
var pengubahWords = (value) => {
  var x = value.split(" ");
  var y = [];
  x.forEach((buah, index) => {
    if (index < x.length - 1 && index < x.length - 2) {
      y.push(`${buah},`);
    } else if (index < x.length - 1) {
      y.push(`${buah}`);
    } else {
      y.push(`dan ${buah}`);
    }
  });
  return y.join(" ");
};
console.log(pengubahWords(words));

// //////////task 3////////////

// var kataSPlit = "Hello World";
// var duplikatSPlit = (value, cb, x) => {
//   var z = value.replaceAll(cb, x);

//   cb = (value) => {
//     return (value = " ");
//   };
//   x = (value) => {
//     return (value = " ");
//   };
//   return z;
// };
// var coba = kataSPlit.replaceAll("l", " ");
// console.log(coba);
// console.log(duplikatSPlit(kataSPlit, "l", " "));

/////task 4///////////

// var num1 = [1, 2, 3, 5];
// var num2 = [4, 5, 6, 15, 16, 19];

// var penjumlahanDuaArray = (value1, value2) => {
//   for (let j = 0; j < value1.length; j++) {
//     if (value1.length < value2.length) {
//       value1.push(0);
//     } else if (value1.length > value2.length) {
//       value2.push(0);
//     }
//   }
//   var hasil = [];
//   for (var i = 0; i < value1.length; i++) {
//     var hasilPenjumlahan = value1[i] + value2[i];
//     hasil.push(hasilPenjumlahan);
//   }

//   return hasil;
// };
// console.log(penjumlahanDuaArray(num1, num2));

///task 5//////////

// var num = [1, 2, 3, 4, 5];
// var penambahanArray = (val, cb) => {
//   var hasil = val;
//   if (!val.includes(cb)) {
//     hasil.push(cb);
//   }
//   var cb = (value) => {
//     return (value = []);
//   };
//   return hasil;
// };
// console.log(penambahanArray(num, 19));

/////task 6//////////

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
