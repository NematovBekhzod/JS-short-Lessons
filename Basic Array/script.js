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
