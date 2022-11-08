//// task 1
function trianglePat (jumlahBarisSegitiga){
    jumlahBarisSegitiga ;
    let angkaDasar = 0;
    let hasilTriangle = ""
    let angkaKedua = 0
    for(let i = 0 ; i <= jumlahBarisSegitiga; i++){
        for(let j = 0; j < i; j++){
          angkaKedua += 1 ;
      
          hasilTriangle += `${angkaDasar}${angkaKedua} `;
          
    } hasilTriangle +="\n" ;
  } 
  return hasilTriangle
}
  jumlahBarisSegitiga = 5;
  console.log(trianglePat(jumlahBarisSegitiga));

/////task 2
function fizzBuzz(arg1){
    let num = 1;
    let lim = arg1;
    
    for ( let j = 1 ; j <= lim ; j++){

        if( num % 15 == 0){
            console.log(`fizzbuzz`)
            num++
        } else if ( num % 3 == 0){
            console.log(`fizz`)
            num++
        } else if ( num % 5 == 0){
            console.log(`buzz`)
            num++
        } else {
            console.log(num)
            num ++
    }
}
return lim;
}
console.log(fizzBuzz(15))

////task 3
function bodyMass(arg1, arg2){
    let weight = arg1;
    let bodyHeight = arg2;
    let formulaIdeal =weight / Math.pow(bodyHeight,2) * 10000

    if(formulaIdeal < 18.5){
      return `${formulaIdeal.toFixed(2)} ==> less weight`;
        
    }else if(formulaIdeal >= 18.5 || formulaIdeal < 24.9){
      return `${formulaIdeal.toFixed(2)} ==> Ideal`;

    }else if(formulaIdeal >= 24.9 || formulaIdeal < 29.9){
        return `${formulaIdeal.toFixed(2)} ==> overweight`;
       
    }else if(formulaIdeal >= 30 || formulaIdeal< 39.9){
      return  `${formulaIdeal.toFixed(2)} ==> very overweight`;
        
    }else {
      return `${formulaIdeal.toFixed(2)} ==> obesity`;
       
    }

}
console.log(bodyMass(90, 180))


//task 4
function oddNumberOnly(arraySaya){;
  var resultArray = [];
  for(let arGan = 0 ; arGan < arraySaya.length; arGan++){
        if(arraySaya[arGan] % 2 === 1){
          resultArray.push(arraySaya[arGan]* 2);
          
        }else {
          resultArray.push(arraySaya[arGan]);
          
        }
      }
      return resultArray;
    }
    
let arrayPer = [1,2,3,4,5,6,7]
console.log(arrayPer)
console.log(oddNumberOnly(arrayPer))

//task 5
function splitToArray(stringIni){
  const hasilString = stringIni.split(" ")
  return hasilString
}
let stringIni = "Hello world"
console.log(splitToArray(stringIni));
