//! Array
// Bir necha qiymatlar to'plamiga Array deyiladi
// Array reference turga misol bo'ladi
// Array'da Har Qanday Data Types Malumot turi bo'lishi mumkin
// Array qatiy qavslar orqali Hosil Qilinadi
// Arraydagi qiymatlar " , " orqali Ajratiladi
// Arraydagi Malumotlar index orqali chaqiriladi
// index noldan boshlaniladi

const mArray = ["Begzod", true]; // Array
//  elen qilish (const, let, var) // nomlash(mArray) // [] => ga qiymatlarni kiritish " , "dan foydalanib

const arrays = [
  "Ansor",
  20,
  "Nematov",
  false, // string, number, undefined
  { fName: "Begzod" }, // object
  function siHello() {
    // function
    console.log("Assalom Alaykum");
  },
  ["red", "Blue"], // array
]; // (1) elon qilish

console.log(arrays[4]); // { fName: 'Begzod' }

let arr2 = Array("salom", 20); // (2) e'lon qilish
// console.log(arr2); */


//? Array'ga Element Qo'shish Va Olib tashlash
//! Qo'shish
/* 
let arr = [3, 4]

arr.push(5, 6) //? Array Oxiridan Element Qo'shish
console.log(arr); 

arr.unshift(1) //? Array Boshidan Element Qo'shish
console.log(arr);

arr.splice(1, 0, 2) //? Array Xohlagan Joydan Qo'shish birinchi qiymat qaysi 
index'dan boshlab Qo'shish ikkinchi qiymat arraydan nechta o'chirish uchinchi qiymat esa arrayga nechta qo'shish
console.log(arr); */


//!Ayirish
/* let a = [1, 2, 3, 4, 5, 6]
a.shift() //? Boshidan Bitta O'chiradi
console.log(a);

a.pop() //? oxiridan Bitta O'chiradi
console.log(a);

a.splice(1, 2); //? Xohlagan Joydan Element o'chiradi ikkinchi qiymay nechta o'chirish kerakligi birinchi element esa qayerdan boshlashi
console.log(a); */

//! Array'dan Qidirish
//? indexOf()
//? lastIndexOf()
//? includes()

let arr = [1, 2, 3, 4, 5, 6, 3, 2, 4];

arr.indexOf() // Qidirilayotgan son mavjud bo'lsa index'ini qaytaradi mavjud bo'lmasa -1 qaytaradi
console.log(arr.indexOf(4)); // 3

arr.lastIndexOf(); // elementlarni oxiridan boshlab qidiradi
console.log(arr.lastIndexOf(4)); // 8

arr.includes() // qidirolayotgan element arrayda mavjud bo'lsa true qaytaradi
console.log(arr.includes(5)); // true


//! Arraylarni Bilashtirish concat()
let number = [1, 2, 3, 4];
let arrs = [5, 6, 3, 2, 4];

number.concat(arrs) // Arraylarni birlashtiradi
let combined = number.concat(arrs)
console.log(combined);

console.log(number.concat(arr, 11));

// ! Qirqib olish slice()
//? number.slice(x, y) // birinchi parametr(x)'ga mos indexdan boshlab ikkinchi parametr(y)'ga mos bo'lgan index'gacha qirqib oladi
// let sliced = number.slice(1, 3)
// console.log(sliced); 

//! Arraylarni clone'lash => spread[...]
let numbers = [1, 2, 3, 4];
let number2 = [...numbers]; // [...]

console.log(number1);
console.log(number2);



let number1 = [1, 2, 3, 4, 90];
function sum(arr) {
    let sum = 0
    for(let key of arr) {
        sum+=key
    }
    console.log(sum);
}
sum(number1)

function sum() {
    let sum = 0
    for(let key in arguments) {
        sum+=arguments[key]
    }
    console.log(sum);
}
sum(7, 9, 1)
/* 
let number1 = [1, 2, 3, 4, 90];
let sum = number1.reduce((x, y) => x + y)
console.log(sum); */

//! for in || for of
const arrfor = [1, 2, 3, 4, 7]

//? for of
for(let key of arrfor) {
  console.log(key); // elementlar //1 2 3 4 7
}

// ? for in
for(let key in arrfor) {
    console.log(key); // index'lar // 0 1 2 3 4
}


let numberses = [1, 2, 3, 4, 7];

//! join() metodi
// numbers.join(x)  array'ni berilgan qiymat bo'yicha ajratadi string'ga o'tkazadi 
//let joined = numbers.join(" ") // 1 2 3 4 7
let joined = numberses.join("-") // 1-2-3-4-7
console.log(joined);

//! split( ) metodi
//? str.split(x) => stringni berilgan argument bo'yicha array'ga ajratadi
let str = "Assalomu Alaykum my name is Ansor"
let newArr = str.split(" ") // str'ni bo'sh joy bo'yicha bo'ladi
console.log(newArr); // [ 'Assalomu', 'Alaykum', 'my', 'name', 'is', 'Ansor' ] 


