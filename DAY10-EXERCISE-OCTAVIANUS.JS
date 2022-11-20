//TITLE : EXCEL?
//INPUT :
//1.create data base inside the function (alphabeth A-Z)
var change = (value) => {
  var huruf = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //PROCESS :
  //1. make the math solution and make new variable to count the Math solution (var result)
  var result = 0;
  // to get A value = 26 pankat 0 * index +1 dari A
  // to get AA value = (26 pangkat 1 * index +1 dari A yang pertama(1) ) + (26 pangkat 0 * index +1 dari A yang kedua (1) )
  // ex BZ = (26 pangkat 1 * index +1 dari B (2)) + (26 pangkat 0 * index + 1 dari Z (26) )= 52 + 26 = 78
  // note BZ = B : menghasilkan pangkat 1 ; Z : menghasilkan pangkat 0
  // ex BBZ = (26 pangkat 2 * index +1 huruf B (2)) + (26 pangkat 1 * index+1 huruf B(2)) + (26 pangkat 0 * index+1 huruf Z (26))= 1352 + 52 + 26 = 1430
  for (var i = 0, j = value.length - 1; i < value.length; i += 1, j -= 1) {
    result += Math.pow(huruf.length, j) * (huruf.indexOf(value[i]) + 1);
    // j berfungsi untuk pangkat dan di loop akan semakin kecil pangkatnya.
  }
  //2. using array.map(function) to create new array and to use the function that we make
  //3. using joing method to change the array result of process 2 into a strings
  //OUTPUT return the result
  return result;
};
var a = ["A", "AA", "BBZ", "ZZ"].map(change).join(","); // ====> PROCESS 2 & 3
console.log(a);

//TITLE : 1 ANGKA BERBEDA
//INPUT : Create an array of numbers but 1 number doesnt repeated
var nums = [4, 4, 5, 2, 2, 3, 4, 6, 6, 3, 10, 7, 10, 5];
var numsEx = (value) => {
  //PROCESS
  //1. sort the value of the array
  //2. then we need to compare value index[i] to the rest of the array value[j]
  //3. IF the same value was detected, we need new variable (count) to count Up the data
  var sortir = value.sort();
  for (var i = 0; i < sortir.length; i++) {
    var count = 0;
    for (var j = 0; j < sortir.length; j++) {
      if (value[i] == value[j]) {
        count++;
      }
    }
    //Output : when only count = 1, return the value (the number differnt from the rest)
    if (count == 1) {
      return value[i];
    }
  }
};
console.log(numsEx(nums));

//TITLE : ANAGRAM
// INPUT : 1. Create 2 variable of strings
var word1 = "Pucuk Harum";
var word2 = "Cukup Murah";
var anagramKah = (value1, value2) => {
  //PROCESS :
  //1. Create function that has 2 params.
  //2. create variable x and y to change all the values to lowercase (Case Sensitive)
  var x = value1.toLocaleLowerCase();
  var y = value2.toLocaleLowerCase();
  //3. create variable a and b to change the string value into array data
  var a = x.split("");
  var b = y.split("");
  //4. create variable c and d to sort the arrays data
  var c = a.sort();
  var d = b.sort();
  //5. then we compare sorted data c and d if the value of each index has the same value
  var hasil = 0;
  for (var i = 0; i < c.length; i++) {
    // 6. each time the compared value match, we count Up the hasil
    if (c[i] === d[i]) {
      hasil++;
    } else {
      hasil--;
    }
  }
  //OUTPUT : IF the hasil is the same with the length of the compared value , then the data is true either way it's false
  if (hasil == c.length) {
    return `${value1} dan ${value2} adalah anagram`;
  } else {
    hasil < c.length;
    return `${value1} dan ${value2} bukan anagram`;
  }
};
console.log(anagramKah(word1, word2));

//TITLE :Staircase/ Fibonanci
//INPUT = Input number value
var angka = 2;
//PROCESS
//1. Make function then use fibonanci logic
var naikTangga = (value) => {
  //2. make new variable n1(Starting point min) and n2(starting point max)
  let n1 = 0;
  let n2 = 1;
  let totalN;
  //3. loop the value and add the addition to totalN
  if (value > 0) {
    for (let k = 1; k <= value; k++) {
      totalN = n1 + n2;
      n1 = n2;
      n2 = totalN;
      //OUTPUT (True) : Return to totalN
      return totalN;
    }
  } else {
    //OUTPUT (false)
    return `input interger positif value`;
  }
};
console.log(naikTangga(angka));
