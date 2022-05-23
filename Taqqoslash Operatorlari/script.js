//! Taqqoslash Operatorlari
/*         
        " > " kattami
        " < " kichikmi
        " == " tengmi
        " >= " katta yoki tengmi
        " <= " kichik yoki tengmi
        " != " teng emasmi
        " === "  Qatiy Tenglik
*/
//? Qiymatlarni taqqoslaydigan va true yoki false Qaytaradiga operatorlar => Taqqoslash Operatorlari deyiladi

console.log("true" > 1); // false
console.log("true" > 0); // false
console.log("true" > "0"); // error

console.log(6 > 5); // true
console.log(77 < 31); // false


console.log(11 >= 11); // true
console.log(6 <= 5); // false
console.log(6 <= 5); // false
console.log(2 == 2); // false

console.log(56 != 78); // true // rostdan ham 56 78ga teng emas
console.log(9 != 9); // false // yo'q ular teng

console.log(6 == "6"); // true
console.log(10 === "10"); // false // Qatiy tenglik
//  String'dagi 10 Number'dagi 10'ga teng emas

console.log("9" > "log");
console.log(null == undefined); // true
console.log(null !== "0");
console.log({} == []); // false
