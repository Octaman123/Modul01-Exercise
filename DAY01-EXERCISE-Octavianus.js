//task 1 & 2
let p = 10 ;
let l = 2 ;
let kelilingPresegiPanjang = 2 * (p +l) ;
let luasPersegiPanjang = p * l ;

console.log("////task 1 & 2////") ;
console.log(`jika panjang = ${p} cm dan lebar = ${l} cm
maka:
keliling persegi panjang = 2 x (p + l) = ${kelilingPresegiPanjang} cm 
luas persegi panjang = p x l = ${luasPersegiPanjang} cm^2\n`) ;

//task 3
let d = 5 ;
let phi = 3.14 ;
let r = 5 ;
let diameterLingkaran = 2 * r ;
let kelilingLingkaran = Math.floor(phi * diameterLingkaran) ;
let luasLingkaran =1 / 2 * phi * Math.pow(r,2) ;

console.log("////task 3////");
console.log(`jika jari-jari lingkaran = ${r} cm
maka :
Diameter lingkaran = 2 * r = ${diameterLingkaran} cm
Keliling lingkaran = phi * d = ${kelilingLingkaran} cm
luas lingkaran = 1/2 x Phi x r^2 = ${luasLingkaran} cm^2\n`) ;

//task 4
let angle1 = 30 ;
let angle2 = 45 ;

let angle3 = 180 - (angle1+angle2) ;
console.log(`////task4////`) ;
console.log(`jika 2 sudut dari segitiga yang diketahui adalah ${angle1} derajat dan ${angle2} derajat
maka sudut yang belum diketahui sebesar = 180 - ( ${angle1} + ${angle2} ) = ${angle3} derajat\n`) ;

//task 5
let days = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"] ;
console.log("////task 5////") ;
console.log(`7 hari dalam seminggu :\n${days[0]}
${days[1]}
${days[2]}
${days[3]}
${days[4]}
${days[5]}
${days[6]}\n`) ;




