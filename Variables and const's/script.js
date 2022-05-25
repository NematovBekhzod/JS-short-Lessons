//! Variables --- O'zgaruvchilar
// Javascript'dagi malumot, qiymatlarni qayta qayta ishlatish uchun ularni o'zgaruvchi yoki o'zgarmaslarga karopkalarda saqlash va shu karopkalarga ism berish kerak Malumotlarni Biror boshqa joyda ishlatish kerak bo'lib qolsa Karopka ismini chaqirib qo'ysak bo'ldi

//? Javascriptda 2 (ikki) xil turdagi karopkalar mavjud va Shu Karopkalar >> Variables --- O'zgaruvchilar deyiladi↙️

// ----------------------------var---------------------------------- //

// 1 - variables => //! var kalit so'zi (eski)
// var                    firstName      =    "Ansor"
// ⬆️ o'zgaruvchi  ⬆️ O'zgaruvchi nomi   ⬆️ o'zgaruvchiga berilgan qiymat

var firstName = "Ansor" //  o'zgartish mumkin ↙️
firstName = "Begzod"

// -------------------------let-------------------------------------- //

// 2 - variables => //! let kalit so'zi (ES6 da qo'shilgan)
//    let         myAge      =    20
// ⬆️ o'zgaruvchi ⬆️ O'zgaruvchi nomi ↖️ o'zgaruvchiga berilgan qiymat 

//* variables'ga --- O'zgaruvchiga berilgan qiymatlatni O'zgartirish Mumkin

let myAge = 20 // o'zgartish mumkin ↙️
myAge = 21

// ------------------------const----------------------------------------//

//! constants (const) --- O'zgarmaslar 
// constants (const) larga berilgan qiymatni Qayta Qayta Ishlatish mumkin lekin ichidagi malumotlarni o'zgartirib Bo'lmaydi

const PI = 3.141592 // o'zgartish mumkin emas ↙️
PI = 20 // ❌ xatolik chiqaradi

// ---------------------var or let-------------------------------------- //

//! "var" bilan "let" kalit so'zlarini farqi

// 1 - farq hostingda

// let bilan elon qilinganda faqat elon qilingan joydan pastda chaqirib ishlatsa bo'ladi

console.log(a); // error
let a = 7; // e'lon qilindi
console.log(a); // 7 // chaqirildi

// var bilan elon qilinganda elon qilingan joydan pastda ham tepada ham chaqirib ishlatsa bo'ladi. lekin tepada chaqirilganda o'zgaruvchi elon qilinganini ko'radi ammo qiymatini o'qimaydi

console.log(b); // undefined
var b = 7; // e'lon qilindi
console.log(b); // 7 // chaqirildi

//? yani "var" da hosting mavjus
//* "let" da hosting bo'lmaydi


// 2 - farqi scopda
if (true) {
    var c = 5
    let d = 6
    const e = 7
}
console.log(c); // 5
console.log(d); // d elon qilinmagan
console.log(e); // e elon qilinmagan

// "var" scop ichida elon qilingan bo'lsa ham scop tashqaridan chaqirsa ham bo'ladi