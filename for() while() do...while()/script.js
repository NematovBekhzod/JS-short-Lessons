//! Loops (Sikillar) - ma'lum bir shartlar beriladi va shu shartlar to'g'ri bo'lsagina ishlaydi

// 3 ta asosiy turi
/* 
    for()
    while()
    do...while()
*/

//! for(Boshlang'ich o'zgaruvchi; shart; arifmetik amal) {....... body ... }
// (0) ("for" kalit so'zini va shart yoziladigan qovus " () " larni kiritish)
// (1)(o'zgaruvchi e'lon qilish va boshlang'ich qiymat berish)
// (2) (Shart Berish)
// (3) (Boshlang'ich qiymatni o'zgartirish)
// (4) gulli qovus'lar " {} " ochish va shu qovuslar ichida shart bajarilganda ishga tushadigan code 'larni kiritish

/* 
// 0   1         2      3
for(let i = 0; i < 10; i++) {
    console.log("Assalomu Alaykum");
}   

// output: Assalomu Alaykum (10)
*/

//! while() sikli => while(shart) {... Body ...}
let a = 0;
let arr = [1, 2, 3, 4, 5, 6, 7];
let summa = 0;
while (a < arr.length) {
  // a O'zgaruvchisi kichik bo'lsa arr (array) uzunligidan ↙️
  summa += arr[a]; // summaga " arr "ni a-chi index'ini qo'shish
  a++; // a'ni birga orttirish
}
console.log(summa); // output: 32

//! do...while() sikli => do{...body...} while(shart)
// do while() oldin amal bajarib keyin shartga qaraydi
let maxNumber = 10;
let minNumber = 2;
do {
  console.log(minNumber); // Amal Bajarish
  minNumber++; // Birga Oshirish
} while (minNumber <= maxNumber); // shart
