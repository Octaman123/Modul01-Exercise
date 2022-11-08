// //task 5
let days = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"] ;
console.log("////task 5////") ;
console.log(`7 hari dalam seminggu :\n${days[0]}
${days[1]}
${days[2]}
${days[3]}
${days[4]}
${days[5]}
${days[6]}\n`) ;

//task 6
let a = 400;
let b = a -365;//40
let c = b % 30;
let tahun = Math.floor(a / 365);
let bulan = Math.floor(b/30);
let hari = Math.floor(c);

console.log(`Dalam ${a} hari terdapat ${tahun} tahun ${bulan} bulan  dan ${hari} hari` + '\n');


// ////////////////part 2////////////////////

// //task1 
let celsius = 36;
let fahrenheit = ((celsius * (9 /5)) + 32);

console.log(`nilai fahrenheit dari ${celsius} derajat celsius adalah ${fahrenheit} fahrenheit` + "\n");

//task 2 
let angka = 30

if(angka % 2 == 0){
    console.log(`${angka} adalah bilangan genap`+'\n');
}else{
    console.log(`${angka} adalah bilangan ganjil`+'\n');
}



// //task 3
let angkaTes = 2; 
let pembagi = 0 ;
for(let i = 1; i <= angkaTes; i++){
    if(angkaTes % i == 0){
        pembagi++
    } 
}

if(pembagi == 2 ){
    console.log(`${angkaTes} bilangan prima`+'\n')
}else{
    console.log(`${angkaTes} bukan bilangan prima`+'\n')
}

//task 4
let sumSatu = 0;
let sumN = 6
for(let i = 0 ; i <=sumN ; i++){
    sumSatu += i;
} console.log(`Hasil penjumlahan dari loop = ${sumSatu}`+"\n");

//task 5
let faktorial = 1;
let faktorialDari = 5;

for(let j = 1 ; j <= faktorialDari ; j++){
    faktorial *= j;
} console.log(`Hasil faktorial dari ${faktorialDari} = ${faktorial}`+"\n");

//task 6
let fiboKe = 10;
let n1 = 0 ;
let n2 = 1;
let totalN ;
for( let k = 1 ; k <= fiboKe ; k++){
    console.log(n1); //menulis pada log
    totalN = n1 + n2; 
    n1 = n2; 
    n2 = totalN;
};
