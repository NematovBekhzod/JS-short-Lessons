//! O'zlashtirish operatori => " = "

// ?  let firstName = "Ansor" // firstName'ga "Ansor" qiymati o'zlashtirildi

let a = 10;
a = "person"; // a "person" qiymatini o'ziga o'zlashtirildi

let firstName = "Begzod";
let lastName = "Nematov";

let fullName = firstName + lastName;

console.log(fullName); // BegzodNematov

console.log(firstName + lastName); // BegzodNematov

console.log(firstName + " " + lastName); // Begzod Nematov

////
let x = 7;
let y = 5;
console.log(x); // 7

x = x + y; // "x" ga "y" ni qo'sh va "x"ga o'zlashtir
// x += y // yuqoridagi bilan bir xill

console.log(x); // 12 // x yangi qiymat o'zlashtirdi
/* 
x = x - y  => x -= y
x = x * y  => x *= y
x = x / y  => x /= y  
*/

//? " % " qoldiq qaytaradi
console.log(16 % 5); // 1
console.log(9 % 5); // 4

//? " ** " daraja'ga ko'tarish
console.log(5 ** 3); // 125
console.log(2 ** 10); // 1024
