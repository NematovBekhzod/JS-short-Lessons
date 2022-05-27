
//! Javascript DATA Types --- Javascript'dagi malumot turlari

//? Javascript'dagi malumot turlari asosan 2 xil bo'ladi ↙️
//* 1) Primitive(oddiy) --- Number, String, Boolean, Undifined, null, Symbol, BigInt
//* 2) Reference(merakkab) --- Object => Object, Array, Function

//? JavaScript-dagi primitive ma'lumotlar turlariga quyidagilar kiradi:

// 1. Numbers - Raqamlar - butun sonlar, vergulli(Float)
// 2. String - Satrlar - bitta qo'shtirnoq ostidagi har qanday ma'lumotlar, qo'sh tirnoq yoki teskari tirnoq
// 3. Boolean - Mantiqiy qiymatlar - true yoki false qiymat
// 4. Null - bo'sh qiymat yoki qiymat yo'q
// 5. Undefined - qiymatsiz e'lon qilingan o'zgaruvchi
// 6. Symbol - 
// 7. BigInt - Katta Raqamlar

// JavaScript-dagi Non-primitive(oddiy bo'lmagan) ma'lumotlar turlarini o'z ichiga oladi:

// 1. Ob'ektlar
// 2. Funksiyalar
// 3. Massivlar


//! 1) Primitive'lar =>

//! Numbers --- Sonlar => JS'dagi Malumot turi ↙️
//? uni birorta o'zgaruvchi(var, let)ga yoki o'zgarmas(const)ga olishimiz mumkin:

// * sonlar butun kasr manfiy musbat ... bo'ishi mumkin va ular oddiy sonni e'lon qilingandek e'lon qilinadi 

let num = 20 // number turidagi o'zgaruvchi

//* (let - o'zgaruvchini e'lon qilish) // let bilan kiritilgan qiymatni o'zgartirish mumkin // num = 2001 ✅

// (num - o'zgaruvchiga berilgan nom) 

// (20 - o'zgaruvchi saqlayotgan qiymat => number turida)

const num2 = 11 // number turidagi qiymat
// (const - o'zgarmasni e'lon qilish) // const bilan kiritilgan qiymatni o'zgarish mumkin emas // num2 = 537 ❌

// (num2 - o'zgarmasga berilgan nom)

// (20 -  o'zgarmas saqlayotgan qiymat => number turida)

/* 
var  num3 = new Number(750)
console.log(num3);
*/

// console.log(); // Bu nodeJs orqali kodni yuritish

//! String ---
//?             son, harf, symbollar to'plamidan tashkil topgan bo'lishi mumkin. String hosil qilish uchun =>
//?             [ " ", ' ', ` ` ] qo'shtirnoqlar ichida malumot kiritish kerak

//? uni birorta o'zgaruvchi(var, let)ga yoki o'zgarmas(const)ga olishimiz mumkin:

/*
?    1 e'lon qilish usuli
var str = "Ansor_01"
let firstName = 'Begzod'
const lastName = `Nematov`

    ? 2 - elon qilish
var lastStr = new String("Nematov Begzod") 
*/

//! Boolean --- Malumot turi O'zida ikkita qiymat qabul qiladi true va false (rost va yolg'on)

// true va false'dan malumotlarni tekshirish maqsadida qo'llaniladi Masalan: ↙️

/* 
console.log(8>7); // true
console.log(2001 < 19); //false 
*/

//! undefined --- Bo'sh qiymat o'zida hech qanday malumot saqlamaydi
/* 
let a;
console.log(a); // typeof undefine  d
*/

//! null --- Malumotlarni bo'shatish maqsadida ishlatiladi o'zida hech qanday malumot saqlamaydi
// Qiymat Ham Berilmagan va Joy ham Olmaydi
/* 
let a = 7
a = null
console.log(a); // null
*/
//! BigInt - esa katta raqamlar bilan ishlashda foydaniladi




//! 2) Reference's bitta adress'ga murojat qiluvchi data types

//! Object's ---  Bir Biriga Bog'liq Malumotlarni Bir Yerga To'planishiga obyekt deyiladi 

//? Bu To'plangan malumotlarni o'zgaruvchiga yoki o'zgarmasga olish mumkin

//* Object --- Gulli Qavslar , Key(proporty), value (qiymatlardan) iborat bo'ladi 
//* har bir key value dan keyin vergul(,) va key va value o'rtasida esa ikki nuqta(:) qo'yish shart

//? Object ichida Number, String, Boolean, undefined, null Array function va object bo'lishi mumkin         

// Object Ichidagi function(funksiya)lar method deyiladi

const person = {
  //  property :   value
    firstName: "Begzod", 

    lastName: "Nematov",

    age: 20,

    isMarried: false,

  // Array
    Dreams: ["strongProgrammer", "GoodMusulman"],

//   Method
    firstcode() {
        console.log("Assalomu Alaykum");
    }
};
//? obyekt' ichiga kirish uchun nuqta(.) yoki[""]dan foydaniladi

console.log(person["age"]); // 20

console.log(person.Dreams); //[ 'strongProgrammer', 'GoodMusulman' ]

person.firstcode() // Assalomu Alaykum

// --------------------------------------------------------------------------- //

//! Function --- funksiya bu biror bir operaatsiyani qayta qayta ishlatish maqsadida ishlatiladi

//? funksiya hosil qilish uchun > "function" > kalit so'zidan foydaniladi funksiya'ga nom qo'ysa ham bo'ladi yoki biror o'zgaruvchiga tenglashtirish

// Funksiya e'lon qilish (1)
// funksiyaga nom berish (2)
// funksiya o'zgaruvchi kiritish (3)
// funksiya chaqirish (4)

//  1       2    3
function siHello(name) {
    console.log("Assalomu Alaykum " + name);
}
//  4
siHello("Ansor") // Assalomu Alaykum Ansor
siHello("Begzod") // Assalomu Alaykum Begzod


//? funksiylar ikki xil bo'ladi void(qiymat qaytarmaydigan) va unvoid(qiymat qaytaradigan)

// unvoid(qiymat qaytaradigan)
function calc(a, b) {
    return a + b;
} 
calc(7,9) // ❌
console.log(calc(7, 9)); // 16 ✅

// void(qiymat qaytarmaydigan)
function calc2(a, b) {
    console.log(a + b);
}
calc2(3, 11); // 14


// ------------------------------------------------------------------------------------- //

//! Array --- array bu bir nechta malumotni bir yerga index orqali yig'ilgan to'plam

//? Array'ni hosil Qilish Uchun "[]" dan foydaniladi 
//* arraydagi malumotlarni o'z index(tartib raqami) orqali chaqiriladi
//* index 0'dan boshlanadi
//* index'ga mos malumotlar " , " orqali ajratiladi
//? Array - number, string, ... , function, Array, object'dan tashkil topgan bo'lishi mumkin

//              0    1    2         3                   4
let arr = ["Begzod", 20, true, {niceName: "Ansor"}, function() {
    console.log("salom");
}, 
//      5
["red", "blue"]
];

//* arraydagi malumotlarni o'z index(tartib raqami) orqali chaqiriladi
/* console.log(arr[0]); // Begzod
console.log(arr[3]); // { niceName: 'Ansor' }
 */

// Array e'lon qilish
let nums = new Array(1, 2, 3, 4, 5, 6)
console.log(nums);

// --------------------------------------------------------------------- //

//! typeof data types(malumot turlarini anqilaydi)tekshiradi
//? string typeof => string
let str = "Ansor"
console.log(typeof str); //! string
// --------------------------- //
//? number typeof => number
let cal = 14
console.log(typeof cal); //! number
// ------------------------------- //
//? boolean typeof => boolean
var bool = true
console.log(typeof bool); //! Boolean
// ----------------------------- //
//? null typeof => object
const nul = null
console.log(typeof nul); //! object
// ----------------------------- //
//? undefined  typeof => undefined 
const unde = undefined
console.log(typeof unde); //! undefined
// ---------------------------------- //
//? object typeof => object
let per = {
    firstName: "ansor",
    age:20
}
console.log(typeof per); //! Object
// --------------------------------- //
//? function typeof => function
function func() {
    console.log("hi");
}
console.log(typeof func); //! function
// -------------------------------------- //
//? Array typeof => object
const ar = [1, 2]
console.log(typeof ar); //! object
// ------------------------------------- //